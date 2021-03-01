import React, { useState, useEffect, useCallback, FC } from 'react';

// libs
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

// material core
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

const DefaultPage: FC = ({ children }) => {
  const [boundaryKey, setBoundaryKey] = useState(0);

  const memorizedSyncLog = useCallback(async (message?: any, componentStack?: any) => {
    const params = {
      level: 'ERROR',
      datetime: new Date().toUTCString(),
      os: 'Window',
      description: 'platform.description',
      userId: 1,
      error: JSON.stringify(message),
      componentStack: JSON.stringify(componentStack),
      location: window.location.href,
      version: '1.0.0',
    };
    localStorage.setItem('errorLog', JSON.stringify(params));
  }, []);

  useEffect(() => {
    async function sendLogWhenOnline() {
      const getLogFromStorage: string | null = localStorage.getItem('errorLog');
      if (getLogFromStorage) {
        memorizedSyncLog();
      }
    }
    sendLogWhenOnline();

    window.onerror = async (message, _, __, ___, errorObj) => {
      memorizedSyncLog(message, errorObj?.stack);
    };

    return () => {
      window.onerror = null;
    };
  }, [memorizedSyncLog]);

  function ErrorFallbackUI({ resetErrorBoundary }: FallbackProps) {
    return (
      <Dialog onClose={resetErrorBoundary} fullWidth open>
        <DialogTitle>
          <Typography variant="h4">Error</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Something went wrong!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={resetErrorBoundary} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <ErrorBoundary
      resetKeys={[boundaryKey]}
      FallbackComponent={ErrorFallbackUI}
      onReset={() => setBoundaryKey((prev) => prev + 1)}
    >
      {children}
    </ErrorBoundary>
  );
};

export default DefaultPage;
