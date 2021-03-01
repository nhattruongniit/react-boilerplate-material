import React, { ComponentType } from 'react';

type ICommon = {
  exact?: boolean;
  path?: string;
  guard?: React.LazyExoticComponent<ComponentType<unknown>> | ComponentType<unknown>;
  layout?: React.FunctionComponent;
  component?: any;
  requireRoles?: string[] | [];
};

export type IRoutes = ICommon & {
  routes?: ICommon[];
};

export type IParams = {
  id?: string;
};
