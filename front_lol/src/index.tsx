

import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import reportWebVitals from './reportWebVitals';
import { App } from './app/App';
import { AuthProvider } from './app/shared/contexts/auth/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>

);

reportWebVitals();

//index.tsx
