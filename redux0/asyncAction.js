const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const { default: thunk } = require("redux-thunk");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const initialState = {
  lodaing: false,
  users: [],
  error: "",
};
//action
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const fetchDataSuccess = (users) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: users,
  };
};
const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        lodaing: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        lodaing: false,
        users: action.payload,
        error: "",
      };
    case FETCH_DATA_FAILURE:
      return {
        lodaing: false,
        users: [],
        error: action.payload,
      };
  }
};
//async action creator(thunkMiddleware)
const fetchUsers = () => {
  return function (dispatch) {
    axios
      .get("https://fakerestapi.azurewebsites.net/api/v1/Users")
      .then((Response) => {
        const users = Response.data;
        dispatch(fetchDataSuccess(users));
      })

      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
