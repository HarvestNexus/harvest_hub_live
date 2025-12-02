import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { PrivateRoute } from './PrivateRoute';

// Import all pages
import Home from "../pages/General-landing-page/index";
import Farmer from "../pages/Farmer-landing-page/FarmerPage"
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import VerifyCode from '../pages/Auth/VerifyCode';
import ResetPassword from '../pages/Auth/ResetPassword';
import ForgetPassword from '../pages/Auth/ForgetPassword';

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-code" element={<VerifyCode />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/farmer" element={<Farmer />} />

            {/* Protected Routes */}
            {/* <Route element={<PrivateRoute />}>
                <Route path="/cart" element={<CartPage />} />
            </Route */}
        </Routes>
    );
};
