import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

// selectors
import { notificationsSelector } from 'selectors/app.selector';

// actions
import { removeSnackbar } from 'actions/app.action';

let displayed: any[] = [];

const Notifier = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(notificationsSelector);
  const { enqueueSnackbar } = useSnackbar();

  const storeDisplayed = (id: string | number) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: string | number) => {
    displayed = [...displayed.filter((key) => id !== key)];
  };

  useEffect(() => {
    Object.values(notifications).forEach((ele: any) => {
      // do nothing if snackbar is already displayed
      if (displayed.includes(ele.key)) return;

      // display snackbar using notistack
      enqueueSnackbar(ele.message, {
        key: ele.key,
        variant: ele.variant,
        onExited: (_, keySnackBar) => {
          dispatch(removeSnackbar(keySnackBar));
          removeDisplayed(keySnackBar);
        },
      });

      // keep track of snackbars that we've displayed
      storeDisplayed(ele.key);
    });
  }, [notifications, enqueueSnackbar, dispatch]);

  return null;
};

export default Notifier;
