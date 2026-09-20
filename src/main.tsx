import {StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// The page is already in the HTML — scripts/prerender.mjs writes it at build
// time, so a crawler reads the words without running any of this. Hydrating
// adopts that markup; createRoot would throw it away and paint it a second time.
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App path={window.location.pathname} />
  </StrictMode>,
);
