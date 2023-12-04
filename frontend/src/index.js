import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />}/>
        <Route path="/add" element={<AddUser />}/>
        <Route path="/edit/:id" element={<EditUser />}/>
      </Routes>
    </BrowserRouter>
);

