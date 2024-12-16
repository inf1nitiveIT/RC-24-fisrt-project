import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './styles/tailwind/tailwind.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
    <h1 className="text-4xl font-bold">
  Hello world!!
    </h1>
  </React.StrictMode>
);
