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
      <h1>Emoji Search App</h1>
      <Picker className="pos" onEmojiClick={selEmoji} skinTone={SKIN_TONE_MEDIUM_DARK}
      pickerStyle={{position:"relative",left:"23rem",top:"5rem",boxShadow:"True",width:"500px"}}/>
    </div>
  );
}

export default App;
