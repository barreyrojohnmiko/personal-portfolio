import { SET_PANEL_DATA_1 } from "./action";

const initialState = {
  panelData1: {
    panelLabel: "Notes",
    panelDescription: "Effortlessly allows you to create, edit, and organize your notes. With backup feature that ensures that your notes are always secure, with the flexibility to export your local storage values at any time.",
    githubLink: "https://github.com/barreyrojohnmiko/RJSNotes",
    externalLink: "https://barreyrojohnmiko.github.io/RJSNotes/",
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
