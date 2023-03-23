import { SET_IS_HEADER_VISIBLE, SET_PREV_SCROLL_POS } from "./action";

const initialState = {
  isHeaderVisible: true,
  prevScrollPos: 0,
};

const headerReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_HEADER_VISIBLE:
      return { ...state, isHeaderVisible: action.payload };
    case SET_PREV_SCROLL_POS:
      return { ...state, prevScrollPos: action.payload };
    default:
      return state;
  }
};

export default headerReducers;
