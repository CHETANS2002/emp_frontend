import {  Routes, Route } from 'react-router-dom';
import './App.css'

import NavbarComponent from './Components/NavbarComponent';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmployeeList from './Components/EmployeeList';



function App() {
  return (
    
    <>
      <ToastContainer position="top-left" autoClose={2000} />
     <NavbarComponent/>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<EmployeeList/>} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
