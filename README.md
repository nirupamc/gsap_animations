# GSAP Text Effects Showcase

A premium, interactive showcase of **85 GSAP text animations** built using **React, Vite, and Tailwind CSS**. Users can preview each effect live (running automatically on viewport entry or manually on replay) and copy the fully self-contained HTML+JS snippet with a single click.

## Features

- **85 Interactive Effects**: Organized into 7 categories (Entrance, Per-Character, Kinetic, Glitch & Digital, Creative, Paragraph, Scroll).
- **Self-Contained Snippets**: Click "Copy Code" to copy a fully standalone HTML + JS file with Tailwind styling and GSAP CDN links.
- **GSAP Context Integration**: Safe React lifecycles using `gsap.context()` for clean-up on card filter/unmount, preventing memory leaks.
- **Prism Syntax Highlighting**: View the code directly in a code inspector modal with `react-syntax-highlighter` styling.
- **Reduced Motion Support**: Automatically checks `prefers-reduced-motion` and falls back to a subtle, static opacity transition to respect user accessibility preferences.
- **Replay & DOM Reset**: Uses a React key-based DOM recycling mechanism to completely wipe inline styles and child nodes before re-running animations.
- **Theme**: Dev-centric sleek dark mode theme (inspired by Linear.app) using neon green `#00FF66` accents.

## Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP 3.12.5 (including `TextPlugin` and `ScrollTrigger` plugins)
- **Icons**: Lucide React
- **Notifications**: Sonner

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server, run:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

To build the static assets for production:
```bash
npm run build
```
The production bundle will be generated in the `dist` directory.

---

## Deployment to Vercel

This is a fully static project that requires **zero backend** configuration. You can host it on Vercel with zero config:

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New** > **Project** and import your repository.
4. Vercel will automatically detect **Vite** as the framework.
5. Click **Deploy**. No build settings need to be modified.

---

License: MIT. Developed by Antigravity.
