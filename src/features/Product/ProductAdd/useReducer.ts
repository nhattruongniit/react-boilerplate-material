export const actionTypes = {
  SET_LOCALES: 'SET_LOCALES',
  SET_ENUM_ARTIST: 'SET_ENUM_ARTIST',
  SET_IS_ACCEPT_DUPLICATED: 'SET_IS_ACCEPT_DUPLICATED',
  SET_MODAL_PRIMARY_LOCALE: 'SET_MODAL_PRIMARY_LOCALE',
  SET_MODAL_CONFIRM_QUIT_ARTIST: 'SET_MODAL_CONFIRM_QUIT_ARTIST',
};

type IAction = { type: string; payload?: any };

type IState = {
  locales: any[] | null;
  enumArtistType: any[] | null;
  enumArtistPro: any[] | null;
  enumArtistLink: any[] | null;
  isAcceptDuplicated: boolean;
  isShowModalConfirmQuitArtist: boolean;
  modalConfirmLocale: {
    isShow: boolean;
    type: string;
    currentLocale: any | null;
    indexLocale: null | number;
  };
};

export const initialValues: IState = {
  locales: null,
  enumArtistType: null,
  enumArtistPro: null,
  enumArtistLink: null,
  isAcceptDuplicated: false,
  isShowModalConfirmQuitArtist: false,
  modalConfirmLocale: {
    isShow: false,
    type: '',
    currentLocale: null,
    indexLocale: null,
  },
};

export function reducer(state: IState, { type, payload }: IAction) {
  switch (type) {
    case actionTypes.SET_LOCALES: {
      return {
        ...state,
        locales: payload,
      };
    }
    case actionTypes.SET_ENUM_ARTIST: {
      return {
        ...state,
        enumArtistType: payload.enumArtistType,
        enumArtistPro: payload.enumArtistPro,
        enumArtistLink: payload.enumArtistLink,
      };
    }
    case actionTypes.SET_IS_ACCEPT_DUPLICATED: {
      return {
        ...state,
        isAcceptDuplicated: payload,
      };
    }
    case actionTypes.SET_MODAL_CONFIRM_QUIT_ARTIST: {
      return {
        ...state,
        isShowModalConfirmQuitArtist: payload,
      };
    }
    case actionTypes.SET_MODAL_PRIMARY_LOCALE: {
      return {
        ...state,
        modalConfirmLocale: {
          isShow: payload.isShow,
          type: payload.type,
          currentLocale: payload.currentLocale,
          indexLocale: payload.indexLocale,
        },
      };
    }
    default:
      return state;
  }
}
