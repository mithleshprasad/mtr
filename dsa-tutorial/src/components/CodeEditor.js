import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import '../../src/CodeEditor.css';

export default function CodeEditor({ onRunCode }) {
  const [code, setCode] = useState('// Write your JavaScript code here');

  const handleRun = () => {
    onRunCode(code);
  };

  return (
    <div className="code-editor">
      <CodeMirror
        value={code}
        extensions={[javascript()]}
        onChange={(value) => setCode(value)}
        theme="dark"
      />
      <button className="run-button" onClick={handleRun}>
        Run Code
      </button>
    </div>
  );
}
