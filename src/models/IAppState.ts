export enum IAppActionTypes {
  SET_LOADING = 'APP/SET_LOADING',
  SET_DIALOG = 'APP/SET_DIALOG',
}

type IDialog = {
  type: string;
  isShow: boolean;
  content?: React.ReactNode | string;
};

export type IAppState = {
  isLoading: boolean;
  dialog: IDialog;
};

export type IAppActionCreator = {
  type: string;
  payload: IAppState;
};
