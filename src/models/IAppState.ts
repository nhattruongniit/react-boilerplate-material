export const IAppActionTypes = {
  SET_LOADING: 'APP/SET_LOADING',
  SET_DIALOG: 'APP/SET_DIALOG',
  ENQUEUE_SNACKBAR: 'APP/ENQUEUE_SNACKBAR',
  REMOVE_SNACKBAR: 'APP/REMOVE_SNACKBAR',
};

type IDialog = {
  type: string;
  isShow: boolean;
  content?: React.ReactNode | string;
};

export type IAppState = {
  isLoading: boolean;
  dialog: IDialog;
  notifications: any;
};

export type IAppActionCreator = {
  type: string;
  payload: any;
};

export type INotifer = {
  key: number | string;
  message?: string | React.ReactNode;
  variant?: 'success' | 'error' | 'warning' | 'info';
};
