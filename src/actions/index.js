import * as actions from "../constants";
import axios from "axios";
export const fetchUsersRequest = () => {
  return {
    type: actions.FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (payload) => {
  return {
    type: actions.FETCH_USERS_SUCCESS,
    payload,
  };
};

export const updateUserError = (payload) => {
  return {
    type: actions.FETCH_USERS_FAILURE,
    error: payload,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersRequest());
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(updateUserError(error));
    }
  };
};

export const increment = () => ({
  type: actions.INCREMENT,
});
