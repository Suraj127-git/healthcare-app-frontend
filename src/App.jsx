import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Home from '../pages/Home';
import DoctorList from '../pages/DoctorList';
import AppointmentList from '../pages/AppointmentList';
import DonationList from '../pages/DonationList';
import ProfileSettings from '../pages/ProfileSettings';
import { Toaster } from './components/ui/toaster';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/appointments" element={<AppointmentList />} />
          <Route path="/donations" element={<DonationList />} />
          <Route path="/profile" element={<ProfileSettings />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;