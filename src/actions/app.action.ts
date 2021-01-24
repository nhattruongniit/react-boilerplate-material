import { IAppActionTypes, ISnackBar } from 'models/IAppState';

export const setLoading = (isLoading: boolean) => ({
  type: IAppActionTypes.SET_LOADING,
  payload: isLoading,
});

export const setDialog = (isShow: boolean, type: string = 'error', content: React.ReactNode = '') => ({
  type: IAppActionTypes.SET_DIALOG,
  payload: {
    dialog: {
      type,
      isShow,
      content,
    },
  },
});

export const setSnackBar = ({ isShow = false, type = 'success', content = 'This is a success!' }: ISnackBar) => ({
  type: IAppActionTypes.SET_SNACKBAR,
  payload: {
    type,
    isShow,
    content,
  },
});
