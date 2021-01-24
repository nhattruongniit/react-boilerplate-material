import { IAuthActionTypes, IAuthActionCreator, IAuthState } from 'models/IAuthState';

const initialState: IAuthState = {
  user: null,
};

const reducer = (state = initialState, { type, payload }: IAuthActionCreator) => {
  switch (type) {
    // case IAuthActionTypes.LOGIN_REQUEST:
    //   return {
    //     ...state,
    //     user: null,
    //   };
    case IAuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };
    case IAuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
      };
    case IAuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };
    case IAuthActionTypes.SILENT_LOGIN:
      return {
        ...state,
        user: payload.user,
      };
    default:
      return state;
  }
};

export default reducer;
