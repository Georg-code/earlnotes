import { useState } from "react";

import { Editor, EditorState } from "draft-js";
import "./App.css";
import "draft-js/dist/Draft.css";

function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
}

export default App;
