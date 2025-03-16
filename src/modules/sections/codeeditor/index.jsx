import { CodeiumEditor } from "@codeium/react-code-editor";
import React from "react";

export default function CodeEditor() {
  return (
    <div>
      <p>Here's an AI-powered Python editor using Codeium.</p>
      <CodeiumEditor language="python" theme="vs-dark" />
      import {CodeiumEditor} from "@codeium/react-code-editor";
    </div>
  );
}
