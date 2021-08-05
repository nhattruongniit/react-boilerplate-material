type IITems = {
  title?: string;
  icon?: React.ReactNode;
  href?: string;
  depth?: number;
};

type IStyle = {
  paddingLeft: number;
};

export type IChildNavBar = IITems & {
  items?: IITems[];
  pathname: string;
  label?: string;
};

export type INavBarCommon = {
  subheader?: string;
  items: IChildNavBar[];
};

export type INavBarItem = {
  depth: number;
  icon: any;
  title: string;
  open?: boolean;
  href: string;
  label?: string;
  isExternalLink: boolean;
  children?: any;
};

export type INavBarExpandItem = {
  icon: any;
  title: string;
  open?: boolean;
  children?: any;
  style: IStyle;
};
