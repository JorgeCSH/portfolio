import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/style.css';
import App from './App.tsx';


// ============================================================================
// Application Entry Point
// ============================================================================
// 1. document.getElementById('root')! finds the root HTML container in index.html.
// 2. createRoot initializes the React 19 root rendering tree.
// 3. StrictMode activates additional checks and warnings during development.
// 4. BrowserRouter provides HTML5 History API routing context to the entire app,
//    enabling URL routing (e.g., /, /about, /education, /projects, etc.) without page reloads.
// ============================================================================
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

