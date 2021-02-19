import { IAppActionTypes, INotifer } from 'models/IAppState';

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

export const enqueueSnackbarAction = (notification: INotifer) => {
  return {
    type: IAppActionTypes.ENQUEUE_SNACKBAR,
    payload: {
      key: notification.key || new Date().getTime() + Math.random(),
      message: notification.message,
      variant: notification.variant || 'success',
    },
  };
};

export const removeSnackbar = (key: string | number | undefined) => ({
  type: IAppActionTypes.REMOVE_SNACKBAR,
  payload: key,
});
