import { Dispatch } from 'redux';

// types
import { IAuthActionTypes } from 'models/IAuthState';
import { IHistory } from 'models/ICommon';

// services
import authService from 'services/authService';

// configs
import { PATH_NAME } from 'configs';

export const login = (username: string, history: IHistory) => async (dispatch: Dispatch<any>) => {
  dispatch({ type: IAuthActionTypes.LOGIN_REQUEST });

  const user = await authService.loginWithAuth0(username);
  dispatch({ type: IAuthActionTypes.LOGIN_SUCCESS, payload: user });
  history.push(PATH_NAME.ROOT);
};

export const logout = () => (dispatch: Dispatch<any>) => {
  authService.logOut();
  dispatch({ type: IAuthActionTypes.LOGOUT });
};

export const setUserData = (user: any) => (dispatch: Dispatch<any>) => {
  dispatch({ type: IAuthActionTypes.SILENT_LOGIN, payload: user });
};
