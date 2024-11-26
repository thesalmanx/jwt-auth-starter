import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../features/auth/authSlice";

const useAuth = () => {
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

  return { loading, isAuthenticated };
};

export default useAuth;
