import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from './Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const redirectUri = "http://localhost:3000/profile";
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-bzg646bh.us.auth0.com"
      clientId="hx6D1lxzaTbmyfDtNKXl1vqjtCW9d4ZJ"
      // redirectUri= "https://www.google.com"
      redirectUri= "https://localhost:3000/profile"
      audience="https://api.com"
      scope="openid profile email"
      >
     <BrowserRouter>
        <Routes>
          <Route path="/" element= {<App/>}/>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
