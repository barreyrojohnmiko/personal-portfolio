import { Dispatch } from "redux";

export const SET_IS_NAVBAR_OPEN = "SET_IS_NAVBAR_OPEN";
export const SET_IS_MOBILE_VIEW = "SET_IS_MOBILE_VIEW";

export const setIsNavbarOpen = (isNavbarOpen: boolean) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_IS_NAVBAR_OPEN,
    payload: isNavbarOpen,
  });
};

export const setIsMobileView = (isMobileView: boolean) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_IS_MOBILE_VIEW,
    payload: isMobileView,
  });
};
