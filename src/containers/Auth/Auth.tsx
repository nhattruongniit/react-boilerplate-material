import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// services
import authService from 'services/authService';

// actions
import { setUserData } from 'actions/auth.action';

type IProps = {
  children: any;
};

const Auth = ({ children }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function initAuth() {
      authService.handleAuthentication();

      if (authService.isAuthenticated()) {
        const user = await authService.loginWithToken();
        dispatch(setUserData(user));
      }
    }
    initAuth();
  }, [dispatch]);

  return <>{children}</>;
};

export default Auth;
