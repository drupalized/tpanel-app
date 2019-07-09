import axios from 'axios';

export const GET_SITES = 'GET_SITES';
export const GET_SITES_SUCCESS = 'GET_SITES_SUCCESS';
export const GET_SITES_ERROR = 'GET_SITES_ERROR';

export const getSitesList = () => {
  return dispatch => {
    dispatch(getSites());

    return axios.get('https://private-5eb0c-tipickly.apiary-mock.com/api/sites')
      .then(response => {
        dispatch(getSitesSuccess(response.data));

        return response.data;
      })
      .catch(error => {
        dispatch(getSitesError(error));
        console.log(error);
      });
  };
}

export const getSites = () => {
  return {
    type: GET_SITES,
  }
};

export const getSitesSuccess = sites => {
  return {
    type: GET_SITES_SUCCESS,
    data: { sites }
  }
};

export const getSitesError = error => {
  return {
    type: GET_SITES_ERROR,
    data: { error }
  }
};
