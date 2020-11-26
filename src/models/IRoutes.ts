type ICommon = {
  exact?: boolean;
  path?: string;
  guard?: any;
  layout?: any;
  component?: any;
};

export type IRoutes = ICommon & {
  routes?: ICommon[];
};
