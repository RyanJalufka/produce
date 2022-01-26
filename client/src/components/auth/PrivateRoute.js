import React, {useState} from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [authorized] = useState(false); //TODO: change this to hooks
  const location = useLocation();

  return authorized === true
      ? children
      : <Navigate
          to="/login"
          replace
          state={{ path: location.pathname }}
        />
}

export default PrivateRoute;
