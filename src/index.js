import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main-page';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Socials from "./components/socials";
import Header from "./components/header";
import Contact from "./routes/contact";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="container">
    <Header></Header>
    <Routes>
          <Route path="/" element={<App />} />
          <Route path="function-hall-booking" element={<Contact />} />
    </Routes>
    <Socials></Socials>
    </div>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();