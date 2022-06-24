import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
