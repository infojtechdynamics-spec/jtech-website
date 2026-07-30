<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, array $payload): never {
    http_response_code($status);
    echo json_encode($payload);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['error' => 'Method not allowed.']);
}

$payload = json_decode((string) file_get_contents('php://input'), true);
$email = is_array($payload) ? trim((string) ($payload['email'] ?? '')) : '';

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['error' => 'Please enter a valid email address.']);
}

$directory = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'storage';
$file = $directory . DIRECTORY_SEPARATOR . 'newsletter-subscribers.csv';

if (!is_dir($directory) && !mkdir($directory, 0750, true) && !is_dir($directory)) {
    respond(500, ['error' => 'Unable to prepare subscription storage.']);
}

$handle = fopen($file, 'c+');
if ($handle === false || !flock($handle, LOCK_EX)) {
    respond(500, ['error' => 'Unable to save your email right now.']);
}

$exists = false;
rewind($handle);
while (($row = fgetcsv($handle)) !== false) {
    if (isset($row[0]) && strcasecmp(trim($row[0]), $email) === 0) {
        $exists = true;
        break;
    }
}

if (!$exists) {
    fseek($handle, 0, SEEK_END);
    if (ftell($handle) === 0) {
        fputcsv($handle, ['email', 'subscribed_at']);
    }
    fputcsv($handle, [$email, gmdate('c')]);
}

fflush($handle);
flock($handle, LOCK_UN);
fclose($handle);

respond(200, [
    'message' => $exists ? 'This email is already on the notification list.' : 'You are on the notification list.'
]);
