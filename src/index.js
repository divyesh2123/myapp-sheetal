import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';
import Login from './Login';
import Example1 from './Example1';
import MyForm from './MyForm';
import Registration from './Registration';
import DisplayData from './DisplayData';
import SingleData from './SingleData';
import ProductList from './ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExampleForNav from './ExampleForNav';
import { FormWithBoostrap } from './FormWithBoostrap';
import MyFirstForm from './MyFirstForm';
import MyExample from './MyExample';
import MyDataGrid from './MyDataGrid';
import MyParent from './MyParet';
import EmployeeA from './EmployeeA';
import MyApp from './MyApp';
import Employee from './Employee';
import LoginWithAPI from './LoginWithAPI';
import Accounts from './Accounts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginWithAPI />
    <Accounts/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
