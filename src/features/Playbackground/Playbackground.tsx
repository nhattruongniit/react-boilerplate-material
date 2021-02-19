import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodo } from 'apis/common.api';
import useGet from 'hooks/useGet';

// redux
import { enqueueSnackbarAction } from 'actions/app.action';

function Playbackground() {
  const dispatch = useDispatch();
  const [boundary, setBoundary] = useState({});
  const [todo, setTodo] = useState({
    title: '',
  });
  const [pagination, setPagination] = useState(1);

  const { data } = useGet(`/todos/${pagination}`, {});

  const _onFetch = async () => {
    setTodo({
      title: '',
    });
    const res = await fetchTodo('/todos/1');
    setTodo(res.data);
  };

  const _onFetchError = async () => {
    await fetchTodo('/todos123/1');
  };

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
      <h3>Error boundary</h3>
      this is add song
      {Object.keys(boundary).length > 0 && boundary}
      <button
        type="button"
        onClick={() =>
          setBoundary({
            1: 'abc',
          })
        }
      >
        test error
      </button>
      <h3>Fetch api</h3>
      <button type="button" onClick={_onFetch}>
        fetch todo
      </button>
      <div>title: {todo.title}</div>
      <h3>Fetch api errors</h3>
      <button type="button" onClick={_onFetchError}>
        test
      </button>
      <h3>Cancel Request</h3>
      Pagination: {pagination}
      <br />
      id: {data && data.id}
      <br />
      title: {data && data.title}
      <br />
      <button type="button" onClick={() => setPagination(pagination + 1)}>
        fetch multi
      </button>
      <h3>Check snackbar</h3>
      <button type="button" onClick={checkSnackBar}>
        Click here
      </button>
    </div>
  );
}

export default Playbackground;
