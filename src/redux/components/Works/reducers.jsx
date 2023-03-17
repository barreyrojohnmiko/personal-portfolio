import { SET_PANEL_DATA_1 } from "./action";

const initialState = {
  panelData1: {
    panelLabel: "Notes",
    panelDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum quaerat velit recusandae exercitationem doloremque, laudantium consectetur eaque.",
    techUsed1: "React",
    techUsed2: "Redux",
  },
};

const worksReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_PANEL_DATA_1:
      return { ...state, panelData1: action.payload };
    default:
      return state;
  }
};

export default worksReducers;
