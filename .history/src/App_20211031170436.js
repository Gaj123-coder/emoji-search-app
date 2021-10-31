import { useState } from "react";
import Picker,{SKIN_TONE_MEDIUM_DARK} from "emoji-picker-react";
import "./App.css";
function App() {
  const [selEmotion,setSelEmotion]=useState(null);
  const selEmoji=(event,emojiObject)=>{
    setSelEmotion(emojiObject);
  };  
  return (
    <div>
      <Picker className="pos" onEmojiClick={selEmoji} skinTone={SKIN_TONE_MEDIUM_DARK}
      pickerStyle={{position:"relative",left:"30rem",top:"5rem"}}/>
    </div>
  );
}

export default App;
