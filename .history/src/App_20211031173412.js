import Picker from "emoji-picker-react";
import { useState } from "react";
import "./App.css";
const App=()=>{
  const [emotion,setEmotion]=useState(null);
  const selEmotion=(event,emojiObject)=()=>{
    setEmotion(emojiObject);
  }

  return (
    <div>
      <h1>Emoji Search App</h1>
      <Picker onEmojiClick={selEmotion}/>
    </div>
  );
}

export default App;