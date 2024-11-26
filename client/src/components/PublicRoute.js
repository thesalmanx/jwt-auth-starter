import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../features/auth/authSlice'; // Import checkAuth to verify user status
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authenticateUser = async () => {
      await dispatch(checkAuth());
      setLoading(false); // Update loading state once auth check is complete
    };
    authenticateUser();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading message or spinner while checking auth
  }

  if (isAuthenticated) {
    // If authenticated, redirect to dashboard
    return <Navigate to="/dashboard" />;
  }

  // If not authenticated, render the children components
  return children;
};

export default PublicRoute;
