import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import { SnackbarProvider } from 'notistack';
import {
  Router,
  Routes,
  BrowserRouter,
  Route,
  useRoutes,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SnackbarProvider>
     <React.StrictMode>
     <App />
     
  </React.StrictMode>
  </SnackbarProvider>
  // <BrowserRouter>
  // <AuthProvider>
  // </AuthProvider>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
