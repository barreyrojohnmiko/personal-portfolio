import { SET_PANEL_DATA } from "./action";

const initialState = {
  panelData: [
    {
      projectLabel: "Notes",
      projectDescription:
        "Effortlessly allows you to create, edit, and organize your notes. With backup feature that ensures that your notes are always secure, with the flexibility to export your local storage data at any time.",
      githubLink: "https://github.com/barreyrojohnmiko/RJSNotes",
      externalLink: "https://barreyrojohnmiko.github.io/RJSNotes/",
      techUsed1: "ReactJS",
      techUsed2: "Redux",
    },
    {
      projectLabel: "Breach Analyzer",
      projectDescription:
        "This service emerged after Adobe's largest ever customer accounts breach. This software aims to check if your credentials have been exposed, reducing the risk of widespread account compromise.",
      githubLink: "",
      externalLink: "https://breach.itfabrik24.net/",
      techUsed1: "ReactJS",
      techUsed2: "Redux",
    },
  ],
};

const worksReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_PANEL_DATA:
      return { ...state, panelData1: action.payload };
    default:
      return state;
  }
};

export default worksReducers;
