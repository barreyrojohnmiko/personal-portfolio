export const SET_IS_NAVBAR_OPEN = "SET_IS_NAVBAR_OPEN";

export const setIsNavbarOpen = (isNavbarOpen) => (dispatch) => {
  dispatch({
    type: SET_IS_NAVBAR_OPEN,
    payload: isNavbarOpen,
  });
};
