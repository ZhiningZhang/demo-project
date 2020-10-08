import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";

//https://www.youtube.com/watch?v=sSp4PRVBJkw&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=36

//use hook
//react-speech-kit

function CustomHooks2App() {
  const [text, setText] = useState();

  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => setText(result),
  });

  return (
    <div>
      <p>CustomHooks2App</p>

      <textarea value={text}></textarea>
      <p>
          <button onClick={listen}>Listien</button>
          <button onClick={stop}>Stop</button>
      </p>
    </div>
  );
}

export default CustomHooks2App;
