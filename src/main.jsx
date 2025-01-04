/* eslint-disable react/no-deprecated */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom'; // Use ReactDOM for React 17
import './index.css';
import App from './App.jsx';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root') // Use render method
);
