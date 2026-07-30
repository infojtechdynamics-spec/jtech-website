(() => {
  const nav = document.querySelector('nav');
  if (!nav || nav.dataset.responsiveNav) return;
  const linkGroup = [...nav.querySelectorAll('div')].find((element) => element.querySelectorAll(':scope > a').length >= 3);
  if (!linkGroup) return;
  nav.dataset.responsiveNav = 'true';

  const supportButton = [...nav.querySelectorAll('button')].find((button) => /request support/i.test(button.textContent));
  if (supportButton) {
    supportButton.classList.add('jtech-support-bubble');
    supportButton.setAttribute('aria-label', 'Request support');
    supportButton.title = 'Request support';
  }
  const menuButton = document.createElement('button');
  menuButton.type = 'button';
  menuButton.className = 'jtech-menu-button';
  menuButton.setAttribute('aria-label', 'Open navigation menu');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.innerHTML = '<span></span><span></span><span></span>';
  const menu = document.createElement('div');
  menu.className = 'jtech-mobile-menu';
  menu.setAttribute('aria-hidden', 'true');
  menu.innerHTML = linkGroup.innerHTML;
  const actions = document.createElement('div');
  actions.className = 'jtech-nav-actions';
  if (supportButton) actions.append(supportButton);
  actions.append(menuButton);
  nav.append(actions, menu);

  const closeMenu = () => {
    menu.classList.remove('is-open'); menuButton.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation menu'); menu.setAttribute('aria-hidden', 'true');
  };
  menuButton.addEventListener('click', () => {
    const opening = !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', opening); menuButton.classList.toggle('is-open', opening);
    menuButton.setAttribute('aria-expanded', String(opening)); menuButton.setAttribute('aria-label', opening ? 'Close navigation menu' : 'Open navigation menu'); menu.setAttribute('aria-hidden', String(!opening));
  });
  menu.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

  const style = document.createElement('style');
  style.textContent = `
    .jtech-nav-actions { display:flex; align-items:center; gap:.65rem; }
    .jtech-menu-button { display:none; width:2.7rem; height:2.7rem; padding:.65rem; border:1px solid rgba(255,255,255,.2); border-radius:9999px; background:rgba(255,255,255,.08); color:inherit; flex-direction:column; justify-content:center; gap:.28rem; cursor:pointer; }
    .jtech-menu-button span { display:block; width:100%; height:2px; border-radius:2px; background:currentColor; transition:transform .2s ease,opacity .2s ease; }
    .jtech-menu-button.is-open span:nth-child(1) { transform:translateY(6px) rotate(45deg); } .jtech-menu-button.is-open span:nth-child(2) { opacity:0; } .jtech-menu-button.is-open span:nth-child(3) { transform:translateY(-6px) rotate(-45deg); }
    .jtech-mobile-menu { display:none; }
    @media (max-width:1023px) {
      nav { padding-left:1rem !important; padding-right:1rem !important; } nav > .hidden { display:none !important; } .jtech-menu-button { display:flex; }
      .jtech-support-bubble { width:2.7rem; height:2.7rem; min-width:2.7rem; padding:0 !important; border-radius:9999px !important; font-size:0 !important; display:inline-flex; align-items:center; justify-content:center; }
      .jtech-support-bubble::before { content:'?'; font:700 1.15rem/1 Arial,sans-serif; }
      .jtech-mobile-menu { position:absolute; top:calc(100% + .5rem); left:1rem; right:1rem; padding:.65rem; border:1px solid rgba(255,255,255,.12); border-radius:1rem; background:rgba(6,19,35,.98); box-shadow:0 1rem 2.5rem rgba(0,0,0,.35); backdrop-filter:blur(18px); }
      .jtech-mobile-menu.is-open { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:.25rem; } .jtech-mobile-menu a { padding:.75rem .85rem; border-radius:.6rem; text-decoration:none; color:inherit; } .jtech-mobile-menu a:hover { background:rgba(255,255,255,.08); }
    } @media (max-width:390px) { .jtech-mobile-menu.is-open { grid-template-columns:1fr; } }
  `;
  document.head.append(style);
})();
