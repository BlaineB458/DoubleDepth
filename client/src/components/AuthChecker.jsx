import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AuthChecker = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const adminUser = useSelector((state) => state.user);

  useEffect(() => {
    checkAdmin();
  }, [adminUser]); // Add adminUser as a dependency

  const checkAdmin = () => {
    if (adminUser && adminUser.admin) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  // Render the child components only if the user is logged in
  return isAdmin ? <>{children}</> : null;
};

export default AuthChecker;