import httpRequest from 'services/httpRequest';

export const fetchTodo = async (url: string) => {
  return httpRequest.get(url, {
    showSpinner: true,
  });
};

export const fetchMultiRequest = async (url: string) => {
  return httpRequest.get(url);
};
