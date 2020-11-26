import { combineReducers } from 'redux';

// reducers
import app from 'reducers/app.reducer';
import auth from 'reducers/auth.reducer';

const reducers = combineReducers({
  app,
  auth,
});

export default reducers;
