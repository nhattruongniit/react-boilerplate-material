import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// services
import authService from 'services/authService';

// components
import LinearProgress from 'components/atoms/LinearProgress';

// actions
import { setUserData } from 'actions/auth.action';

type IProps = {
  children: any;
};

const Auth = ({ children }: IProps) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function initAuth() {
      authService.handleAuthentication();

      if (authService.isAuthenticated()) {
        const user = await authService.loginWithToken();
        dispatch(setUserData(user));
      }
      setIsLoading(false);
    }
    initAuth();
  }, [dispatch]);

  if (isLoading) return <LinearProgress />;

  return children;
};

export default Auth;
