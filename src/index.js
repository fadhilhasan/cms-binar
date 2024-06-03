import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import IndexRoutes from './routes/index.routes';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <IndexRoutes />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);

reportWebVitals();
