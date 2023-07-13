import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import ListEmp from './ListEmp'
import Contactus from './Contactus';
import Employee from './Employee';
import Employeeedit from './Employeeedit'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employeedel from './Employeedel';
import EmployeeCreate from './EmployeeCreate'
import Nopage from './Nopage';
import Listproduct from './Product';
import Listproductedit from './Listproductedit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="Home" element={<Home />} />
          <Route path="Contactus" element={<Contactus />} />
          <Route path="ListEmp" element={<ListEmp />} />
          <Route path="emp/:id" element={<Employee />} />
          <Route path="empedit/:id" element={<Employeeedit />} />
          <Route path="empdel/:id" element={<Employeedel />} />
          <Route path="empcreate" element={<EmployeeCreate />} />
          <Route path="product" element={<Listproduct />} />
          <Route path="productedit/:id" element={<Listproductedit />} />



          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
