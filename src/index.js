import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './pages/mainPage';
import reportWebVitals from './reportWebVitals';
import AboutPage from './pages/aboutPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProgramPage from './pages/programPage';

const router = createBrowserRouter([
  {
    path: "/",  // localhost:3000
    element: <MainPage/>,
  },
  {
    path : '/aboutPage',
    element : <AboutPage/>
  },
  {
    path : '/programPage',
    element : <ProgramPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
