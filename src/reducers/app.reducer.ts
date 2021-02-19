import { IAppActionTypes, IAppActionCreator, IAppState } from 'models/IAppState';

const initialState: IAppState = {
  isLoading: false,
  dialog: {
    type: 'error',
    isShow: false,
    content: '',
  },
  notifications: {},
};

const reducer = (state = initialState, { type, payload }: IAppActionCreator) => {
  switch (type) {
    case IAppActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case IAppActionTypes.SET_DIALOG:
      return {
        ...state,
        dialog: {
          type: payload.dialog.type,
          isShow: payload.dialog.isShow,
          content: payload.dialog.content,
        },
      };
    case IAppActionTypes.ENQUEUE_SNACKBAR: {
      const { key, message, variant } = payload;
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [key]: {
            key,
            message,
            variant,
          },
        },
      };
    }
    case IAppActionTypes.REMOVE_SNACKBAR: {
      const newNotfi = { ...state.notifications };
      delete newNotfi[payload];
      return {
        ...state,
        notifications: newNotfi,
      };
    }
    default:
      return state;
  }
};

export default reducer;
