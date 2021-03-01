export enum IAuthActionTypes {
  LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS = 'AUTH/LOGIN_SUCESS',
  LOGIN_FAILURE = 'AUTH/LOGIN_FAILURE',
  SILENT_LOGIN = 'AUTH/SILENT_LOGIN',
  LOGOUT = 'AUTH/LOGOUT',
  REGISTER = 'AUTH/REGISTER',
}

export type IAuthState = {
  user: string | null;
  role: string | null;
};

export type IAuthActionCreator = {
  type: string;
  payload: IAuthState;
};
