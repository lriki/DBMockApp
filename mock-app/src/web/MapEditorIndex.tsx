import { CSSProperties, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import img1 from "./assets/img2.png";

import { App } from "./App";

const styleNoteBox: CSSProperties = {
    border: "1px solid #999999",
    backgroundColor: "#ffddd2",
    textAlign: "left",
    borderRadius: 3,
    margin: 2,

}

createRoot(document.getElementById("root") as Element).render(
    <StrictMode>
        <div style={styleNoteBox}>マップエディタです。</div>
        <img src={img1} alt="Image" width={800} height={600} />;
    </StrictMode>
);
