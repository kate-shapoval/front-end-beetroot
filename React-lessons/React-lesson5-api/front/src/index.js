import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import App2 from './App2.jsx';
import ApiHook from './App3.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />
    <ApiHook />
  </React.StrictMode>
);
