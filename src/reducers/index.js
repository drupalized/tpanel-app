// Global components.
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { sites, siteId } from './sitesReducer';
import { activeMenuItem } from './menuReducer';

export const createRootReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    sites,
    siteId,
    activeMenuItem
  });
};
