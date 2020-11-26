import { IAppActionTypes, IAppActionCreator, IAppState } from 'models/IAppState';

const initialState: IAppState = {
  isLoading: false,
  dialog: {
    type: 'error',
    isShow: false,
    content: '',
  },
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
    default:
      return state;
  }
};

export default reducer;
