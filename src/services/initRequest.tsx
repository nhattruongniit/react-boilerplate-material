import axios, { AxiosRequestConfig, AxiosError } from 'axios';

// actions
import { setLoading, setDialog } from 'actions/app.action';

export type IConfig = AxiosRequestConfig & {
  showSpinner?: boolean;
};

type IAxiosResponse = AxiosError & {
  config: {
    showSpinner?: boolean;
  };
};

const requestConfig: IConfig = {
  baseURL: process.env.REACT_APP_ENDPOINT_URL,
  timeout: 5000,
  showSpinner: false,
};

export const axiosInstance = axios.create(requestConfig);

export default function initRequest(store: any) {
  let requestCount = 0;

  function decreaseRequestCount() {
    requestCount -= 1;
    if (requestCount === 0) {
      store.dispatch(setLoading(false));
    }
  }

  axiosInstance.interceptors.request.use(
    (config: IConfig) => {
      if (config.showSpinner) {
        requestCount += 1;
        store.dispatch(setLoading(true));
      }
      return config;
    },
    (error: IAxiosResponse) => {
      if (error.config.showSpinner) {
        decreaseRequestCount();
      }
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (res: any) => {
      if (res.config.showSpinner) {
        decreaseRequestCount();
      }
      return res;
    },
    (error: IAxiosResponse) => {
      if (error && error.config.showSpinner) {
        decreaseRequestCount();
        store.dispatch(setDialog(true));
      }
      return Promise.reject(error);
    },
  );
}
