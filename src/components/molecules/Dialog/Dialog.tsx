import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material core
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// components
import TypographyBase from 'components/atoms/TypographyBase';

// actions
import { setDialog } from 'actions/app.action';

// selectors
import { dialogSelector } from 'selectors/app.selector';

export default function DialogError() {
  const dispatch = useDispatch();
  const { isShow } = useSelector(dialogSelector);

  const handleClose = () => {
    dispatch(setDialog(false));
  };

  return (
    <div>
      <Dialog open={isShow} onClose={handleClose} fullWidth>
        <DialogTitle>
          <TypographyBase variant="h4" text="Error" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Something went wrong from systems!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
