import React, { useState, useCallback, FC } from 'react';

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

const MainLayout: FC = ({ children }) => {
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
};

export default MainLayout;
