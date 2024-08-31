import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import './App.css';
import Profile from './pages/Profile';
import AirtimeToCash from './pages/Airtimetocash';
import TransactionHistory from './pages/Transactionhistory';
import HelpAndSupport from './pages/Helpandsupport';

const App = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/profile' element={<Profile/>}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/airtimetocash' element={<AirtimeToCash/>}/>
            <Route path='/transactionhistory' element={<TransactionHistory/>}/>
            <Route path='/helpandsupport' element={<HelpAndSupport/>}/>
          </Routes>
    </Router>
  );
};

export default App;
