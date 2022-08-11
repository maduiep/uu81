import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter,} from "react-router-dom";
import { Provider } from 'react-redux'
import App from './App';
import './main.css';
import store from './app/store'
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  </BrowserRouter>
);


