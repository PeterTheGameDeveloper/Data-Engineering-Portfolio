# Data Engineering Portfolio - Development Guide

## Getting Started

1.  **Install Dependencies**:
    ```bash
    ```bash
    npm install
    ```
    ```
2.  **Start Local Server**:
    ```bash
    npm run dev
    ```
    Open the link shown (usually `http://localhost:5173`) in your browser.

    > **Windows Users Loop**: If you see a "SecurityError" about execution policies:
    > - **Option 1**: Double-click the `start.bat` file I created.
    > - **Option 2**: Run via Command Prompt (`cmd`) instead of PowerShell.
    > - **Option 3**: Run `cmd /c "npm run dev"` in your PowerShell terminal.

## Customization

### 1. Personal Info
Edit `src/components/Hero.jsx` to update your name and tagline.

### 2. Projects
Edit `src/components/Projects.jsx`. You can modify the `projectsData` array to include your actual projects.
```javascript
const projectsData = [
  {
    id: 1,
    title: "Your Project Name",
    description: "What did you do?",
    tags: ["Tool 1", "Tool 2"],
    link: "https://github.com/..."
  },
  // ...
];
```

### 3. Skills
Edit `src/components/Skills.jsx` to update your tech stack.

### 4. Styling
Global colors are in `src/index.css`. You can change `--accent-cyan` or `--bg-primary` to match your preferred aesthetic.

## Deployment

### Vercel (Recommended)
1.  Push this code to GitHub.
2.  Go to [Vercel](https://vercel.com) and sign up/login.
3.  Click "Add New Project" and select your repository.
4.  Vercel will detect Vite/React. Click "Deploy".

### Netlify
1.  Push to GitHub.
2.  Go to [Netlify](https://netlify.com).
3.  "Add new site" -> "Import an existing project".
4.  Select your repo. Build command: `npm run build`, Publish directory: `dist`.

## Next Steps
- **Add a Blog**: Create a new component or use a headless CMS.
- **Connect Real Data**: Fetch project stats from GitHub API in `Projects.jsx`.
- **Interactive Visuals**: Use libraries like `recharts` or `d3.js` to add charts to your hero section.
