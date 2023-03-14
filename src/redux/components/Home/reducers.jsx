import { SET_IS_NAVBAR_OPEN } from "./action";

const initialState = {
  isNavbarOpen: false,
};

const homeReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_NAVBAR_OPEN:
      return { ...state, isNavbarOpen: action.payload };
    default:
      return state;
  }
};

export default homeReducers;
