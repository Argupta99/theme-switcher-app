Create a detailed README.md file for my React TypeScript project called "Multi-Theme Switcher App".

This is a Vite-powered SPA built for an assignment. It allows users to switch between three distinct themes that each differ in colors, layout, fonts, spacing, and structure.

Here's what my app includes:

Themes:
1. **Theme 1 (Light Default)** – Minimalist, sans-serif font, light layout.
2. **Theme 2 (Dark Mode)** – Sidebar layout, serif font, bold contrast.
3. **Theme 3 (Monokai Colorful)** – Grid card layout, playful colors with Pacifico font.

Theme Switcher:
- Dropdown in the header to toggle between themes.
- State managed by Context API.
- Theme preference is persisted with `localStorage`.

 Pages & Routing:
- Home: shows cards from `https://fakestoreapi.com/products`
- About: local dummy card data from `data.ts`, each opens in a detail page.
- Contact: static info (optional).
- Detail pages: 
  - `/product/:id` — API data detail view
  - `/details/:id` — Local dummy data detail view
- React Router v6 is used

Design & UI:
- Fully responsive (mobile-first).
- TailwindCSS used for utility styling.
- Footer sticks to bottom of every page.
- Subtle animations: theme transition, nav hover, button interactions.
- Reusable Button component.

Accessibility & Quality:
- Proper alt tags, semantic tags.
- Secure, no vulnerable dependencies.
- Built with clean folder structure and good component separation.

Technologies Used:
- React + Vite
- TypeScript
- Tailwind CSS
- Context API
- React Router DOM
- `fakestoreapi.com`

Installation Instructions:
1. Clone the repo
2. Run `npm install`
3. Start the dev server with `npm run dev`

 Folder Structure:
- `/pages`: All main route pages
- `/components`: Header, Footer, Button, Card
- `/context`: ThemeContext
- `/data.ts`: Dummy local card data
- `App.tsx`: Layout wrapper
- `main.tsx`: Entry point
- `theme.css`: All CSS variables for themes



✅ Deployment: Netlify



