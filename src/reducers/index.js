// Global components.
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { sites } from './sitesReducer';

export const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    sites
  });
};
