import {createStore, combineReducers} from 'redux';
import itemCount from './reducers/itemCount.';
import user from './reducers/user';

const rootReducer = combineReducers({
  count: itemCount,
  user: user,
});

export const store = createStore(rootReducer);
