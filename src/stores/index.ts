import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// rootReducers;
import rootReducers from './rootReducers';

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
