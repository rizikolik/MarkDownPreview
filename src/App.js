import React from 'react';


import './App.css';
import Editor from './Components/Editor';
import Preview from './Components/Previewer';

function App() {


  const placeholder = 
`# Welcome to my React Markdown Previewer! 

## This is h2 .
### And this is h3 and other stuff:
  
Heres some code, \`<div>dsadsadsadsadsadsadasdsad</div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
Text bolder: **bold**
Italic : _italic_.
both: **_both!_**


Lİnks that open with a new tab: [links](https://www.freecodecamp.com), and
>  Qutotes..



- Here are the list items :
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. now numbered lists:
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
  return (
    <div className="App">
      <h1>Welcome to  My MarkDown Previewer</h1>
      
      <Editor placeholder={placeholder} />
      <Preview />
    </div>
  );
}

export default App;
