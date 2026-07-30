---
name: Cyber-Precision Enterprise
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8f9097'
  outline-variant: '#45474c'
  surface-tint: '#bdc7dc'
  primary: '#bdc7dc'
  on-primary: '#273141'
  primary-container: '#071120'
  on-primary-container: '#737d90'
  inverse-primary: '#555f71'
  secondary: '#b4c5ff'
  on-secondary: '#002a78'
  secondary-container: '#0053db'
  on-secondary-container: '#cdd7ff'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#00131d'
  on-tertiary-container: '#0086b5'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d9e3f8'
  primary-fixed-dim: '#bdc7dc'
  on-primary-fixed: '#121c2b'
  on-primary-fixed-variant: '#3e4758'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1440px
---

## Brand & Style

This design system is engineered for high-stakes enterprise environments, blending the cold precision of cybersecurity with the fluid innovation of modern SaaS giants. The brand personality is authoritative yet visionary—evoking a sense of absolute security and "innovation in motion."

The aesthetic is a fusion of **Corporate Minimalism** and **Glassmorphism**. It utilizes a "Dark Mode First" philosophy to create depth through luminosity rather than traditional shadow. Key visual motifs include:
- **Luminous Depth:** Using semi-transparent surfaces (Glassmorphism) to imply layered intelligence.
- **Precision Engineering:** Sharp execution of interactive grids and hairline borders that mimic hardware schematics.
- **Kinetic Energy:** Subtle, animated gradients and neon-blue glows that guide the eye toward critical actions and data points.
- **Enterprise Maturity:** A focus on high-density information display that remains legible and un-cluttered, inspired by developer-centric tools like Linear and Vercel.

## Colors

The palette is anchored in a spectrum of deep obsidian and navy, providing a high-contrast canvas for electric accents.

- **Foundational Neutrals:** Graphite Black (#020617) serves as the primary canvas. Deep Navy (#071120) and Midnight Blue (#0B1F3A) are used for structural containment and layering.
- **Core Accents:** Electric Blue (#2563EB) is reserved for primary actions and brand-critical indicators. Cyan (#38BDF8) provides a "glow" effect for secondary highlights and success states.
- **Functional Slates:** Soft Slate (#94A3B8) is the workhorse for secondary text and borders, ensuring metadata is visible but not distracting.
- **Special Effects:** Dark Glass surfaces utilize a background blur (minimum 12px) to maintain legibility while preserving the sense of layered depth.

## Typography

The typography system prioritizes technical clarity. **Geist** is used for all primary UI elements to provide a modern, geometric, yet highly readable experience. For data-heavy contexts, code snippets, or system status labels, **JetBrains Mono** is employed to reinforce the "Tech Dynamics" identity.

Large headlines should use tight letter-spacing for a sophisticated, "designed" look. Body text maintains standard spacing for maximum comfort during long sessions. All labels and status indicators should be rendered in uppercase JetBrains Mono to distinguish them from interactive body elements.

## Layout & Spacing

This design system utilizes a **Fixed Grid** philosophy for dashboard views and a **Fluid Content Area** for documentation or feed-based views.

- **Desktop:** 12-column grid with 24px gutters. Sidebars are fixed at 280px to maintain consistent navigation.
- **Tablet:** 8-column grid with 20px gutters. Sidebars collapse into an icon-only rail or hamburger menu.
- **Mobile:** 4-column grid with 16px margins. Stacked layout for cards and data tables.

The spacing rhythm is based on a 4px baseline, ensuring that all vertical and horizontal gaps are multiples of 4, creating a mathematically sound and "engineered" appearance.

## Elevation & Depth

Hierarchy is established through **Luminous Tiers** rather than heavy shadows:
1. **Base Layer:** Graphite Black (#020617) - The deep background.
2. **Surface Layer:** Midnight Blue (#0B1F3A) - Used for primary sidebar and footer backgrounds.
3. **Elevated Glass:** Dark Glass (rgba(15, 23, 42, 0.75)) with a 1px white border at 10% opacity. This is used for main content cards and modals.
4. **Interactive State:** Elements in focus or hovered gain a 0px 0px 15px Cyan glow (rgba(56, 189, 248, 0.3)) and a brighter 1px border.

Shadows, when used, are extremely subtle and "sharp"—narrower spread and higher opacity to mimic a single, close light source.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a professional, industrial feel that avoids the "playfulness" of highly rounded corners while remaining more modern than sharp, 90-degree edges.

- **Standard Elements:** Inputs, buttons, and tags use 0.25rem (4px).
- **Container Elements:** Cards and modals use 0.5rem (8px).
- **Avatars/Status Dots:** Maintain a circular (full round) shape to distinguish biological or status indicators from structural UI.

## Components

### Buttons
- **Primary:** Solid Electric Blue background with white text. No shadow; instead, a subtle inner-glow on hover.
- **Ghost:** Hairline border (Soft Slate) with transparent background. Text transitions to Cyan on hover.

### Glass Cards
The signature component. Features a background blur (12px), a semi-transparent Midnight Blue fill, and a top-down linear gradient border (White at 15% to White at 5%) to simulate light hitting the top edge.

### Input Fields
Darker than the surface background to create a "punched-in" look. 1px Slate border that glows Electric Blue on focus. Labels use the JetBrains Mono style.

### Interactive Grids
Background patterns of dots or thin lines (5% opacity) that react to mouse movement with a subtle "flashlight" effect, highlighting the grid intersections near the cursor.

### Status Chips
Minimalist capsules with a small "pulsing" dot indicator. Success (Cyan), Warning (Amber), Error (Crimson).

### Motion
Transitions should be snappy (200ms) using `cubic-bezier(0.4, 0, 0.2, 1)`. Use "slide and fade" for entry animations to emphasize the "Motion" aspect of the brand.