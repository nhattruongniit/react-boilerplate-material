import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useGet from 'hooks/useGet';

// action
import { enqueueSnackbarAction } from 'actions/app.action';

function Playbackground() {
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState(1);
  const { data } = useGet(`/todos/${pagination}`, {});

  function checkSnackBar() {
    dispatch(
      enqueueSnackbarAction({
        message: 'Check snackbar Successful!',
        key: new Date().getTime() + Math.random(),
        variant: 'success',
      }),
    );
  }

  return (
    <div>
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
    </div>
  );
}

export default Playbackground;
