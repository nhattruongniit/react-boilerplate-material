import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Portal } from 'react-portal';

// material core
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// selectors
import { snackbarSelector } from 'selectors/app.selector';

// actions
import { setSnackBar } from 'actions/app.action';

function SnackBarBase() {
  const { isShow, type, content } = useSelector(snackbarSelector);
  const dispatch = useDispatch();

  const _onClose = () => {
    dispatch(
      setSnackBar({
        isShow: false,
        type,
        content,
      }),
    );
  };

  return (
    <Portal>
      <Snackbar open={isShow} autoHideDuration={1000} onClose={_onClose}>
        <MuiAlert elevation={6} variant="filled" severity={type} onClose={_onClose}>
          {content}
        </MuiAlert>
      </Snackbar>
    </Portal>
  );
}

export default SnackBarBase;
