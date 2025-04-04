import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/login.js'; // Note: matches your actual filename case
import UserList from './components/UserList';
import EditUser from './components/EditUser';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/users" 
            element={
              <ProtectedRoute>
                <UserList />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/edit/:id" 
            element={
              <ProtectedRoute>
                <EditUser />
              </ProtectedRoute>
            } 
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;