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
      <h1>Emoji Search app</h1>
      <Picker onEmojiClick={selEmotion} pickerStyle={{width:"500px",position:"relative",left:"23rem",top:"2rem"}}/>
    </div>
  );
}

export default App;
