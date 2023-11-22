export const SET_PANEL_DATA = "SET_PANEL_DATA";

export const setPanelData = (panelData) => (dispatch) => {
  dispatch({
    type: SET_PANEL_DATA,
    payload: panelData,
  });
};
