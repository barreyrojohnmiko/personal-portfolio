export const SET_PANEL_DATA_1 = "SET_PANEL_DATA_1";

export const setPanelData1 = (panelData1) => (dispatch) => {
  dispatch({
    type: SET_PANEL_DATA_1,
    payload: panelData1,
  });
};
