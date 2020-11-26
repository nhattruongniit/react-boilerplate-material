import { Dispatch } from 'redux';

// types
import { IAuthActionTypes } from 'models/IAuthState';

// services
import authService from 'services/authService';

export const login = (username: string) => async (dispatch: Dispatch<any>) => {
  dispatch({ type: IAuthActionTypes.LOGIN_REQUEST });

  const user = await authService.loginWithAuth0(username);
  dispatch({ type: IAuthActionTypes.LOGIN_SUCCESS, payload: user });
};

export const logout = () => (dispatch: Dispatch<any>) => {
  authService.logOut();
  dispatch({ type: IAuthActionTypes.LOGOUT });
};

export const setUserData = (user: any) => (dispatch: Dispatch<any>) => {
  dispatch({ type: IAuthActionTypes.SILENT_LOGIN, payload: user });
};
