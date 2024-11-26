import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../features/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const authenticateUser = async () => {
      await dispatch(checkAuth());
      setLoading(false);
    };
    authenticateUser();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
