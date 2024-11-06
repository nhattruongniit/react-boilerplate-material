type FetchPollCallbackArgs = {
  response: Response;
  retries: number;
  cancel: () => void;
};

export function fetchPoll(
  url: string,
  timeout: number,
  callback: (args: FetchPollCallbackArgs) => void,
  fetchOptions?: RequestInit
) {
  let retries: number = 0;
  let canceled: boolean = false;

  function cancel() {
    canceled = true;
  }

  async function request() {
    const response = await fetch(url, fetchOptions);

    if (!canceled) {
      callback({
        response,
        cancel,
        retries,
      });

      setTimeout(request, timeout);
    }

    retries++;
  }

  request();

  return {
    cancel,
    retries,
  };
}

export function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeout: number
): Promise<Response> {
  return Promise.race([
    fetch(url, options),
    new Promise<Response>((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), timeout)
    ),
  ]);
}

export async function copyToClipboard(value, message = 'Copied to clipboard') {
  if (!navigator.clipboard) {
    notification.error({
      message: "Your browser doesn't support copy to clipboard",
    });
  }

  try {
    await navigator.clipboard.writeText(value);
    notification.success({
      message,
    });
  } catch (e: any) {
    notification.error({
      message: "Can't copy to clipboard",
      description: e,
    });
  }
}
