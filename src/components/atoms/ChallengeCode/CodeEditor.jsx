import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import './QuestionCodeEditor.scss';

const CodeEditor = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const editorDidMount = (editor, monaco) => {
    console.log('Editor mounted');
    editor.focus();
  };

  const onChange = (newValue, e) => {
    console.log('onChange:', newValue);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleRunCode = () => {
    console.log('Running code...');
  };

  const handleSubmitCode = () => {
    console.log('Submitting code...');
  };

  return (
    <div className="code-editor-container">
      <div className="language-dropdown">
        <label htmlFor="languageDropdown">Select language:</label>
        <select
          id="languageDropdown"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
      </div>

      <div className="editor-wrapper">
        <MonacoEditor
          width="800"
          height="600"
          language={selectedLanguage}
          theme="vs-dark"
          value={`// Start coding in ${selectedLanguage}...`}
          options={{
            fontSize: 16,
            automaticLayout: true
          }}
          editorDidMount={editorDidMount}
          onChange={onChange}
        />
      </div>

      <div className="action-buttons">
        <button className="run-code-button" onClick={handleRunCode}>
          <i className="fas fa-play"></i> Run Code
        </button>
        <button className="submit-code-button" onClick={handleSubmitCode}>
          <i className="fas fa-check"></i> Submit Code
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
