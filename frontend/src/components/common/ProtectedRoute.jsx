import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
  const { user, token } = useSelector((state) => state.auth);

  if (!user || !token) {
    toast.error('Please login to access this page');
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;