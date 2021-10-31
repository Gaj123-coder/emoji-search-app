import "./App.css";
import Picker from "emoji-picker-react";
import { useState } from "react";
const App=()=>{
  const [emotion,setEmotion]=useState(null);
  const selEmotion=(event,emojiObject)=>{
    setEmotion(emojiObject);
  }
  return (
    <Picker onEmojiClick={selEmotion}/>
  );
}

export default App;
