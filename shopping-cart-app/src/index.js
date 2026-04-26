import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';  // thêm dòng này
import { store } from './store';         // thêm dòng này (import store)
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>   {/* bọc App bên trong Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();