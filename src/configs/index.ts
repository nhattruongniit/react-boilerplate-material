import { PATH_NAME } from './pathName';
import { USER_ROLE } from './userRole';
import { DRAWER_MENU_LABEL } from './drawerMenu';

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const LANGUAGE = {
  ENGLISH: 'en',
  VIETNAMESE: 'vn',
};

const VERSION_PROJECT = {
  // eslint-disable-next-line global-require
  version: require('../../package.json').version,
};

export { PATH_NAME, USER_ROLE, DRAWER_MENU_LABEL, VERSION_PROJECT };
