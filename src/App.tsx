import { useState } from "react";
import createBoldStyleStrategy from "./components/strategy/boldStrategy";
import findregex from "./utils/findregex";

import {
  Editor,
  EditorState,
  DraftDecorator,
  CompositeDecorator,
  DraftComponent,
} from "draft-js";
import "./App.css";
import "draft-js/dist/Draft.css";
import React from "react";

function App() {
  const HashtagSpan = (props: {
    offsetKey: any;
    children:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  }) => {
    return <span style={styles.hashtag}>{props.children}</span>;
  };
  const decorator = new CompositeDecorator([
    { strategy: hashtagStrategy, component: HashtagSpan },
  ]);

  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty(decorator)
  );

  const HASHTAG_REGEX = /#[\w\u0590-\u05ff]+/g;
  function hashtagStrategy(
    contentBlock: any,
    callback: any,
    contentState: any
  ) {
    findregex(HASHTAG_REGEX, contentBlock, callback);
  }

  const styles = {
    root: {
      fontFamily: "'Helvetica', sans-serif",
      padding: 20,
      width: 600,
    },
    editor: {
      border: "1px solid #ddd",
      cursor: "text",
      fontSize: 16,
      minHeight: 40,
      padding: 10,
    },
    button: {
      marginTop: 10,
      textAlign: "center",
    },
    handle: {
      color: "rgba(98, 177, 254, 1.0)",
      direction: "ltr",
      unicodeBidi: "bidi-override",
    },
    hashtag: {
      color: "rgba(95, 184, 138, 1.0)",
    },
  };

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      placeholder="Test"
    />
  );
}

export default App;
