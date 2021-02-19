import { createSelector } from 'reselect';

// types
import IRootState from 'models/IRootState';

export const isLoadingSelector = createSelector(
  (state: IRootState) => state.app,
  (app) => app.isLoading,
);

export const dialogSelector = createSelector(
  (state: IRootState) => state.app,
  (app) => app.dialog,
);

export const notificationsSelector = createSelector(
  (state: IRootState) => state.app,
  (app) => app.notifications,
);
