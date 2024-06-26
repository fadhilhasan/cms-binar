import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/dashboard/DashboardPage';
import CarlistPage from '../pages/car/CarlistPage';
import AddCarPage from '../pages/car/AddCarPage';
import UpdateCarPage from '../pages/car/UpdateCarPage';
import SignInPage from '../pages/auth/signin/SignInPage';
import PrivateRoutesAdmin from '../utils/PrivateRoutesAdmin';

function IndexRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route element={<PrivateRoutesAdmin />}>
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/admin/car/list" element={<CarlistPage />} />
          <Route path="/admin/add/car" element={<AddCarPage />} />
          <Route path="/admin/update/car/:id" element={<UpdateCarPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default IndexRoutes;
