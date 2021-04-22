import * as actions from "../constants";

const initialState = {
  isFetching: false,
  users: [],
  isError: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case actions.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.payload,
      };

    case actions.FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: action.error,
      };
    default:
      return state;
  }
};

export default usersReducer;
