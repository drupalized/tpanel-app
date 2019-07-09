import {
  GET_SITES,
  GET_SITES_SUCCESS,
  GET_SITES_ERROR
} from '../actions/sitesActions'

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
