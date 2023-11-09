import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ManageCompany from '../ManageCompany/ManageCompany';
import ManageDepartment from '../Department/Deparment';
import ManageDesignation from '../Designation/Designation';
// import ManageDesignatio from '../Designation/Designation';
import ManageEmployee from '../Employees/Employees';

const AdminDashboard = () => {
    return (
        <Routes>
            
             <Route path="manageCompany" element={<ManageCompany />} /> 
             <Route path="manageDepartment" element={<ManageDepartment />} /> 
             <Route path="manageDesignation" element={<ManageDesignation />} /> 
             <Route path="manageEmployee" element={<ManageEmployee />} /> 
        </Routes>
    );
};

export default AdminDashboard;