import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TabGroup } from "electron-tabs";

import { App } from "./App";

createRoot(document.getElementById("root") as Element).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// // Select tab-group
// const tabGroup = document.querySelector("tab-group") as TabGroup;
// //let tabGroup = new TabGroup();
// console.log("tabGroup", tabGroup);

// // Setup the default tab which is created when the "New Tab" button is clicked
// // tabGroup.setDefaultTab({
// //   title: "New Page",
// //   src: "MapEditorIndex.html",
// //   visible: true,
// //   active: true
// // });

// // Do stuff
// const tab = tabGroup.addTab({
//   title: "electron-tabs on NPM",
//   src: "https://www.npmjs.com/package/electron-tabs"
// });
// const pos = tab.getPosition();
// console.log("Tab position is " + pos);

// const tab1 = tabGroup.addTab({
//   title: "New Page",
//   src: "./MapEditorIndex.html",
//   active: true,
// });
