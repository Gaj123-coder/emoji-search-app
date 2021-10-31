import { useState } from "react";
import Picker,{SKIN_TONE_MEDIUM_DARK} from "emoji-picker-react";
import "./App.css";
function App() {
  const [selEmotion,setSelEmotion]=useState(null);
  const selEmoji=(event,emojiObject)=>{
    setSelEmotion(emojiObject);
  }
  return (
    
  );
}

export default App;
