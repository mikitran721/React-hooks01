import { TOGGLE_AUTH } from "../reducers/types";

const AuthReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_AUTH:
      return !state;
    default:
      return state;
  }
};

export default AuthReducer;
