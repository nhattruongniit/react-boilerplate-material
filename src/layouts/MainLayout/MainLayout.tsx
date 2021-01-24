import React, { useState, useCallback } from 'react';

// libs
import clsx from 'clsx';

// material core
import CssBaseline from '@material-ui/core/CssBaseline';

// containers
import ErrorBoundary from 'containers/ErrorBoundary';

// components
import NavBar from './NavBar';
import TopBar from './TopBar';

// styles
import useStyles from './styles';

type IProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: IProps) {
  const classes = useStyles();
  const [isDrawer, setIsDrawer] = useState(true);

  const _handleToogleDrawer = useCallback(() => {
    setIsDrawer(!isDrawer);
  }, [isDrawer]);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <TopBar isDrawer={isDrawer} handleToogleDrawer={_handleToogleDrawer} />

      <NavBar isDrawer={isDrawer} />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isDrawer,
        })}
      >
        <div className={classes.toolbar} />
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
    </div>
  );
}
