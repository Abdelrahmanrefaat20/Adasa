# عدسة (Adasa)

A modern, Arabic-language photography blog built with React, TypeScript, and Tailwind CSS. "Adasa" (عدسة, meaning "lens") shares professional photography tips, tutorials, and techniques across categories like lighting, portraits, landscapes, and gear.

🔗 **Live demo:** [assignment-13-mu.vercel.app](https://adasa-c6lm-alpha.vercel.app/)

## Features

- 📸 **Blog listing & articles** – Browse posts by category and read full articles with author info, tags, and read time
- 🏠 **Home page** – Featured posts and site highlights
- ℹ️ **About page** – Information about the blog and its mission
- 🔒 **Privacy Policy & Terms** pages
- 🧭 **Client-side routing** with React Router (including a custom 404 page)
- 🎨 **Styled with Tailwind CSS v4** and **Flowbite** components
- 🔤 Icons via **Font Awesome**
- 🇸🇦 Fully **Arabic (RTL)** content

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Routing | React Router DOM v7 |
| Styling | Tailwind CSS v4, Flowbite |
| Icons | Font Awesome |
| Linting | ESLint (typescript-eslint) |

## Project Structure

```
Adasa/
├── public/              # Static assets (favicon, icons)
├── src/
│   ├── layouts/         # Shared layout components (e.g. MainLayout)
│   ├── Home.tsx         # Home page
│   ├── Blog.tsx         # Blog listing page
│   ├── Article.tsx      # Single article page (/blog/:slug)
│   ├── About.tsx        # About page
│   ├── Privacy.tsx      # Privacy policy page
│   ├── Terms.tsx        # Terms of service page
│   ├── Notfound.tsx     # 404 page
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx       # Site footer
│   ├── main.tsx         # App entry point, routes, and blog post data
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Abdelrahmanrefaat20/Adasa.git
cd Adasa

# Install dependencies
npm install
```

### Development

Start the local dev server with hot module reloading:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build

Type-check and build for production:

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/blog` | Blog listing |
| `/blog/:slug` | Single article |
| `/about` | About |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `*` | 404 Not Found |

