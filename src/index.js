import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TokenProvider from './Store/TokenProvider';
import CartProvider from './Store/CartProvide';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <TokenProvider>
    <App />
    </TokenProvider>
    </CartProvider>
  </React.StrictMode>
);
