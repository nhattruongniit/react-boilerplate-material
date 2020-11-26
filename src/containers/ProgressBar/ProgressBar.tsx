import React from 'react';
import { useSelector } from 'react-redux';

import LinearProgress from 'components/atoms/LinearProgress';

// selectors
import { isLoadingSelector } from 'selectors/app.selector';

function Progress() {
  const isLoading = useSelector(isLoadingSelector);

  return (
    <>
      {isLoading ? <LinearProgress /> : null}
    </>
  );
}

export default Progress;
