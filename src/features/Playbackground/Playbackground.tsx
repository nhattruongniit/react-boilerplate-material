import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useGet from 'hooks/useGet';

// action
import { enqueueSnackbarAction } from 'actions/app.action';

// component
import ImageElement from 'components/atoms/ImageElement';
import CountDown from 'components/atoms/CountDown';
import httpRequest from 'services/httpRequest';

function Playbackground() {
  const timer = 1000 * 30000;
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState(1);
  const { data } = useGet(`/todos/${pagination}`, {});
  const [countdownRetry, setCountdownRetry] = React.useState(Date.now());

  function checkSnackBar() {
    dispatch(
      enqueueSnackbarAction({
        message: 'Check snackbar Successful!',
        key: new Date().getTime() + Math.random(),
        variant: 'success',
      }),
    );
  }

  const onCountdownChange = React.useCallback((val: any) => {
    if (val && val <= 0) {
      setCountdownRetry(Date.now() - 1);
    }
  }, []);

  async function handleFetchUser() {
    const res = await httpRequest.get('/api/user', {
      showSpinner: true,
    });

    console.log('handleFetchUser', res);
  }

  return (
    <div>
      <h3>Test refresh token</h3>
      <button type="button" onClick={handleFetchUser}>
        Fetch Users
      </button>
      <h3>Cancel Request: Please open Network tab.</h3>
      Pagination: {pagination}
      <br />
      id: {data && data.id}
      <br />
      title: {data && data.title}
      <br />
      <button type="button" onClick={() => setPagination(pagination + 1)}>
        Please click multi time
      </button>
      <h3>Show snackbar</h3>
      <button type="button" onClick={checkSnackBar}>
        Click here
      </button>
      <h3>ImageElement check load error iamge</h3>
      <ImageElement src="https://localhost/google/thumbnail/1REdMzA_QCINqqK0BkjK_us8gUxb2Nrnp?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIxMWI0NTIyLWUyMDctNDI0Zi05ZDA3LTE4NGQ2ZTk3ZmFmNiIsInVzZXJfYXV0aDBfaWQiOiJnb29nbGUtb2F1dGgyfDExMDUzNDkyNTM4Njk2NzU3MTY0NiIsImlhdCI6MTY3ODg2ODMxMiwiZXhwIjoxNjc4OTU0NzEyLCJhdWQiOiJodHRwczovL3FjLmNjcy5hbWFub3Rlcy5pbyIsImlzcyI6Imh0dHBzOi8vcWMuY2NzLmFtYW5vdGVzLmlvIn0.TkEdcc_QJhyUXAyvq2F4UQRe-OUk9wlBLd0aT3cdp68" />
      <h3>Countdown</h3>
      <button type="button" onClick={onCountdownChange}>
        Click here
      </button>
      <CountDown targetDate={new Date(countdownRetry + timer)} />
    </div>
  );
}

export default Playbackground;
