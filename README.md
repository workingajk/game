# 🔨 Whack-A-Mole Game

A fast-paced, interactive **Whack-A-Mole** web game built with **React 19**, **Vite**, and **Tailwind CSS**. Test your reflexes by whacking as many moles as possible before the 60-second countdown expires!

---

## ✨ Features

- **Classic Whack-a-Mole Gameplay**: 3x3 grid where moles pop up dynamically.
- **Custom Hammer Cursor**: Themed hammer cursor for an immersive arcade experience.
- **60-Second Countdown Timer**: Race against the clock to score maximum points.
- **Score Tracking & High Score**: Real-time score tracking with all-time top scores saved locally via `localStorage`.
- **Audio & Sound Effects**: Background music with toggle controls (`ON`/`OFF`) and satisfying hammer smash sound effects powered by [Howler.js](https://howlerjs.com/).
- **Game Over Alert**: Interactive popup using [SweetAlert2](https://sweetalert2.github.io/) displaying your final score at the end of each round.
- **Modern UI**: Styled with Tailwind CSS v4 for a clean and responsive layout.
- **Client-Side Routing**: Smooth page transitions between Home, Game, and 404 pages via React Router.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Audio Engine**: [Howler.js](https://howlerjs.com/)
- **Alerts / Notifications**: [SweetAlert2](https://sweetalert2.github.io/)
- **Icons & Components**: [@mui/material](https://mui.com/) & [@mui/icons-material](https://mui.com/material-ui/material-icons/)

---

## 📁 Project Structure

```text
├── public/               # Static assets
├── src/
│   ├── assets/           # Images (mole, hole, hammer) and audio files (music, smash)
│   ├── components/       # Reusable components (Header, etc.)
│   ├── pages/
│   │   ├── Home.jsx      # Landing page with Top Score & Play button
│   │   ├── Game.jsx      # Main game board, timer, score, audio controls
│   │   ├── Game.css      # Mole animations and styles
│   │   └── Pnf.jsx       # 404 / Page Not Found
│   ├── App.jsx           # Route configurations
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # Main HTML document
├── package.json          # Project dependencies and scripts
└── vite.config.js        # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine (version 18 or higher recommended).

### Installation

1. Clone or download this repository:
   ```bash
   git clone <repository-url>
   cd game
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server:
```bash
npm run dev
```

Open your browser and navigate to the local URL shown in your terminal (typically `http://localhost:5173`).

---

## 🕹️ How to Play

1. Click **Play** on the welcome screen.
2. A 60-second timer begins immediately.
3. Move your hammer cursor over the grid and click on the mole as soon as it appears.
4. Each successful hit awards **+1 point**, plays a smash sound effect, and moves the mole to a new random hole.
5. Toggle the background music on or off using the **music ON / OFF** button at the top right.
6. When the timer hits `0`, the game ends and your score will be compared against the local high score!

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with HMR. |
| `npm run build` | Bundles the application for production in `dist/`. |
| `npm run preview` | Locally previews the production build. |
| `npm run lint` | Runs ESLint to check for code issues. |
