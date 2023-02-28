import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';
import Login from '../pages/Login';
import ResetPasswordForm from '../pages/ResetPassword';
import Signup from '../pages/Signup';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgot' element={<ForgotPassword/>}/>
            <Route path='/reset' element={<ResetPasswordForm/>}/>
        </Routes>
    );
};

export default AllRoutes;