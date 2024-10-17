import { csrfFetch } from "./csrf";

const SET_SPOT_DETAILS = "spots/setSpotDetails";

export const setSpotDetails = (spot) => ({
  type: SET_SPOT_DETAILS,
  payload: spot,
});

export const fetchSpotDetails = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`);
  const data = await response.json();
  dispatch(setSpotDetails(data));
  return response;
};

const initialState = { spot: null };

const spotDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPOT_DETAILS:
      return { ...state, spot: action.payload };
    default:
      return state;
  }
};

export default spotDetailsReducer;
