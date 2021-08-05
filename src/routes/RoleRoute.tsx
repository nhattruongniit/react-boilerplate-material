import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// configs
import { PATH_NAME } from 'configs';

// selectors
import { roleSelector } from 'selectors/auth.selector';

type IProps = {
  requireRoles: string[] | [];
};

const RoleRoute: FC<IProps> = ({ children, requireRoles = [] }) => {
  const history = useHistory();
  const role = useSelector(roleSelector);

  useEffect(() => {
    if (!role || requireRoles.length === 0) return;

    const checkRole = requireRoles.includes(role);
    if (!checkRole) {
      history.replace(PATH_NAME.ERROR_403);
    }
  }, [history, role, requireRoles]);

  return <>{children}</>;
};

export default RoleRoute;
