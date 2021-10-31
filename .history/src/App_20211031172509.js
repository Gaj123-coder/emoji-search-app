import "./App.css";
import Picker from "emoji-picker-react";
import { useState } from "react";
const App=()=>{
  const [emotion,setEmotion]=useState(null);
  const selEmotion=(event,emojiObject)=>{
    setEmotion(emojiObject);
  }
  return (
    <div>
      <svg width="100px" height="100px">
        <circle cx="10" cy="10" r="!0" stroke="red" strokeWidth="2px" fill="yellow"></circle>        
      </svg>
    </div>
  );
}

export default App;
