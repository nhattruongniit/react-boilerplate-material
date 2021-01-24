export enum IAppActionTypes {
  SET_LOADING = 'APP/SET_LOADING',
  SET_DIALOG = 'APP/SET_DIALOG',
  SET_SNACKBAR = 'APP/SET_SNACKBAR',
}

type IDialog = {
  type: string;
  isShow: boolean;
  content?: React.ReactNode | string;
};

export type IAppState = {
  isLoading: boolean;
  dialog: IDialog;
  snackbar: ISnackBar;
};

export type IAppActionCreator = {
  type: string;
  payload: any;
};

export type ISnackBar = {
  isShow: boolean;
  type?: 'success' | 'info' | 'warning' | 'error';
  content?: React.ReactNode | string;
};
