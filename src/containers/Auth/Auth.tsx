import React, { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';

// services
import authService from 'services/authService';

// actions
import { setUserData } from 'actions/auth.action';

const Auth: FC = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function initAuth() {
      authService.handleAuthentication();

      if (authService.isAuthenticated()) {
        const { user, role } = await authService.loginWithToken();
        dispatch(setUserData(user, role));
      }
    }
    initAuth();
  }, [dispatch]);

  return <>{children}</>;
};

export default Auth;
