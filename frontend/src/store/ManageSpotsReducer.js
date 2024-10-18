import { csrfFetch } from "./csrf";

const SET_USER_SPOTS = "spots/setUserSpots";

export const setUserSpots = (spots) => ({
  type: SET_USER_SPOTS,
  payload: spots,
});

export const fetchUserSpots = () => async (dispatch) => {
  const response = await csrfFetch("/api/spots/current");
  const data = await response.json();
  dispatch(setUserSpots(data.Spots)); // Ensure this is an array
  return response;
};

// const initialState = { userSpots: [] };

const spotsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_USER_SPOTS:
      return { ...state, userSpots: action.payload };
    default:
      return state;
  }
};

export default spotsReducer;
