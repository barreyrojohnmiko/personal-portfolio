import { SET_IS_NAVBAR_OPEN, SET_IS_MOBILE_VIEW } from "./action";

const initialState = {
  isNavbarOpen: false,
  isMobileView: true,
};

const homeReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_NAVBAR_OPEN:
      return { ...state, isNavbarOpen: action.payload };
    case SET_IS_MOBILE_VIEW:
      return { ...state, isMobileView: action.payload };
    default:
      return state;
  }
};

export default homeReducers;
