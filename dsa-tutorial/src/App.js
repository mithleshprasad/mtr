import React, { useState } from 'react';
import './App.css';
import CodeEditor from './components/CodeEditor';

function App() {
  const [output, setOutput] = useState('');

  const handleRunCode = (code) => {
    try {
      const result = eval(code); // Warning: Use eval cautiously in production
      setOutput(result !== undefined ? result.toString() : 'Code executed successfully. No output.');
      console.warn("Execution Result:", result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>DSA Practice Problems</h1>
        <CodeEditor onRunCode={handleRunCode} />
        <div className="output-container">
          <h3>Output:</h3>
          <pre className="output">{output || 'Your output will appear here.'}</pre>
        </div>
      </header>
    </div>
  );
}

export default App;
