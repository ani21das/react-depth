import React from "react";
import Video from "./components/Video";
import { Thumb, TitleThumb } from "./components/Thumb";
function App() {
  return (
    <div>
      <div>App</div>
      <Video title="React" />
      <Video title="Node" />
      <Thumb resource="Youtube" />
      <TitleThumb />
    </div>
  );
}

export default App;
