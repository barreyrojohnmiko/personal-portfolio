import { Dispatch } from "redux";

export const SET_IS_HEADER_VISIBLE = "SET_IS_HEADER_VISIBLE";
export const SET_PREV_SCROLL_POS = "SET_PREV_SCROLL_POS";

export const setIsHeaderVisible = (isHeaderVisible: boolean) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_IS_HEADER_VISIBLE,
    payload: isHeaderVisible,
  });
};

export const setPrevScrollPos = (prevScrollPos: number) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_PREV_SCROLL_POS,
    payload: prevScrollPos,
  });
};
