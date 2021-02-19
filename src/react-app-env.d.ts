/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_DRAWER_WIDTH: number;
    REACT_APP_THEME: string;
    REACT_APP_LANGUAGE: string;
    REACT_APP_ENDPOINT_URL: string;
    REACT_APP_DELAY_GET_DATA: number;
    REACT_APP_DEBOUNCE_TIME: number;
    REACT_APP_MAX_SNACKBAR: number;
    REACT_APP_AUTO_HIDE_SNACKBAR: number;

    REACT_APP_KEY_TOKEN: string;
    REACT_APP_KEY_EXPIRED_DATE: string;

    REACT_APP_ENDPOINT_URL: string;
    REACT_APP_SERVER_HOST: string;

    REACT_APP_AUTH0_CALLBACK_URL: string;
    REACT_APP_AUTH0_CLIENTID: string;
    REACT_APP_AUTH0_DOMAIN: string;
    REACT_APP_AUTH0_API_URL: string;
  }
}
