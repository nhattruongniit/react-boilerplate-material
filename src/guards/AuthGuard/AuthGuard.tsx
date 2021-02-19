import React, { FC } from 'react';
import { Redirect } from 'react-router';

// configs
import { PATH_NAME } from 'configs';

// services
import authService from 'services/authService';

const AuthGuard: FC = ({ children }) => {
  const isAuth = authService.getAccessToken();

  if (!isAuth) return <Redirect to={PATH_NAME.LOGIN} />;

  return <>{children}</>;
};

export default AuthGuard;
