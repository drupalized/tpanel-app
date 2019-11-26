// Global components.
import * as Url from 'url';

// URL paths.
import { SITE } from '../config/paths';

// Constants.
import {
  GET_SITES,
  GET_SITES_SUCCESS,
  GET_SITES_ERROR,
  UPDATE_SITE_ID
} from '../actions/sitesActions';

/* Sites List */
const initialState = {
  items: [],
  loading: false,
  error: null
}

export const sites = (state = initialState, action) => {
  switch (action.type) {
    case GET_SITES:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_SITES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.data.sites
      };
    case GET_SITES_ERROR:
      return {
        ...state,
        loading: false,
        error: action,
        items: []
      };
    default:
      return state;
  }
};

/* Site ID */
const pathName = Url.parse(window.location.href).pathname;
let currentSiteId = pathName.indexOf(`${ SITE }/`) >= 0
  ? Url.parse(window.location.href).pathname.replace('/site/', '')
  : null;

const initialSiteId = { value: currentSiteId };

export const siteId = (state = initialSiteId, action) => {
  switch (action.type) {
    case UPDATE_SITE_ID:
      return {
        ...state,
        value: action.siteId
      }
    default:
      return state
  }
}
