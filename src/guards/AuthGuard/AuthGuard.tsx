import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

// configs
import { PATH_NAME } from 'configs';

// selectors
import { userSelector } from 'selectors/auth.selector';

const AuthGuard: FC = ({ children }) => {
  const user = useSelector(userSelector);

  if (!user) return <Redirect to={PATH_NAME.LOGIN} />;

  return <>{children}</>;
};

export default AuthGuard;
