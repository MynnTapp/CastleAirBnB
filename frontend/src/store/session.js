// // frontend/src/store/session.js

// import { csrfFetch } from "./csrf";

// const SET_USER = "session/setUser";
// const REMOVE_USER = "session/removeUser";

// const setUser = (user) => {
//   return {
//     type: SET_USER,
//     payload: user,
//   };
// };

// const removeUser = () => {
//   return {
//     type: REMOVE_USER,
//   };
// };

// export const login = (user) => async (dispatch) => {
//   const { credential, password } = user;
//   const response = await csrfFetch("/api/session", {
//     method: "POST",
//     body: JSON.stringify({
//       credential,
//       password,
//     }),
//   });
//   const data = await response.json();
//   dispatch(setUser(data.user));

//   return response;
// };

// const initialState = { user: null };

// const sessionReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_USER:
//       return { ...state, user: action.payload };
//     case REMOVE_USER:
//       return { ...state, user: null };
//     default:
//       return state;
//   }
// };

// export const restoreUser = () => async (dispatch) => {
//   const response = await csrfFetch("/api/session");
//   const data = await response.json();
//   dispatch(setUser(data.user));
//   return response;
// };

// export const signup = (user) => async (dispatch) => {
//   const { username, firstName, lastName, email, password } = user;
//   const response = await csrfFetch("/api/users", {
//     method: "POST",
//     body: JSON.stringify({
//       username,
//       firstName,
//       lastName,
//       email,
//       password,
//     }),
//   });
//   const data = await response.json();
//   dispatch(setUser(data.user));
//   return data;
// };

// // frontend/src/store/session.js

// // ...
// export const logout = () => async (dispatch) => {
//   const response = await csrfFetch("/api/session", {
//     method: "DELETE",
//   });
//   dispatch(removeUser());
//   return response;
// };

// export default sessionReducer;

// frontend/src/store/session.js

// import { csrfFetch } from "./csrf";

// const SET_USER = "session/setUser";
// const REMOVE_USER = "session/removeUser";

// const setUser = (user) => {
//   return {
//     type: SET_USER,
//     payload: user,
//   };
// };

// const removeUser = () => {
//   return {
//     type: REMOVE_USER,
//   };
// };

// export const login = (user) => async (dispatch) => {
//   const { credential, password } = user;
//   const response = await csrfFetch("/api/session", {
//     method: "POST",
//     body: JSON.stringify({
//       credential,
//       password,
//     }),
//   });
//   const data = await response.json();
//   localStorage.setItem("token", data.token);
//   dispatch(setUser(data.user));

//   return response;
// };

// const initialState = { user: null };

// const sessionReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_USER:
//       return { ...state, user: action.payload };
//     case REMOVE_USER:
//       return { ...state, user: null };
//     default:
//       return state;
//   }
// };

// export const restoreUser = () => async (dispatch) => {
//   const response = await csrfFetch("/api/session");
//   const data = await response.json();
//   dispatch(setUser(data.user));
//   return response;
// };

// export const signup = (user) => async (dispatch) => {
//   const { username, firstName, lastName, email, password } = user;
//   const response = await csrfFetch("/api/users", {
//     method: "POST",
//     body: JSON.stringify({
//       username,
//       firstName,
//       lastName,
//       email,
//       password,
//     }),
//   });
//   const data = await response.json();
//   dispatch(setUser(data.user));
//   return data;
// };

// // frontend/src/store/session.js

// // ...
// export const logout = () => async (dispatch) => {
//   const response = await csrfFetch("/api/session", {
//     method: "DELETE",
//   });
//   dispatch(removeUser());
//   return response;
// };

// export default sessionReducer;

import { csrfFetch } from "./csrf";

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

// Login action
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  localStorage.setItem("token", data.token); // Save token to local storage
  dispatch(setUser(data.user));

  return response;
};

// Restore user action to be called on app load
export const restoreUser = () => async (dispatch) => {
  // Check local storage for token
  const token = localStorage.getItem("token");

  if (token) {
    try {
      // Decode token to get user data
      const payload = JSON.parse(atob(token.split(".")[1]));
      dispatch(setUser(payload.data)); // Set user in Redux store
    } catch (error) {
      console.error("Failed to decode token", error);
      dispatch(removeUser()); // Remove user if token is invalid
    }
  } else {
    dispatch(removeUser()); // Remove user if no token is present
  }
};

// Signup action
// export const signup = (user) => async (dispatch) => {
//   const { username, firstName, lastName, email, password } = user;
//   const response = await csrfFetch("/api/users", {
//     method: "POST",
//     body: JSON.stringify({
//       username,
//       firstName,
//       lastName,
//       email,
//       password,
//     }),
//   });
//   const data = await response.json();
//   dispatch(setUser(data.user));
//   return data;
// };

export const signup = (user) => async (dispatch) => {
  const { username, firstName, lastName, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      firstName,
      lastName,
      email,
      password,
    }),
  });

  const data = await response.json();
  console.log("Response data from server:", data); // Add this log

  if (data.token) {
    console.log("Received token:", data.token); // Add this log
    localStorage.setItem("token", data.token);
    dispatch(setUser(data.user));
  } else {
    console.error("Token is missing in the response");
  }

  return response;
};

// Logout action
export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  localStorage.removeItem("token"); // Remove token from local storage
  return response;
};

// Initial state and reducer
const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;
