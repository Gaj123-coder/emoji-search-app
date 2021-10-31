import Picker from "emoji-picker-react";
import { useState } from "react";
import "./App.css";
const App=()=>{
  const [emotion,setEmotion]=useState(null);
  const selEmotion=(event,emojiObject)=()=>{
    setEmotion(emojiObject);
  }
}

export default App;