import './App.css';
import {sad1,worry1,angry1,happy1,smiley1,peace1,love1,joy1,laugh1,gift1,smile1,hands1,sports1,supper1,evil1,shy1,tasty1,confuse1,sleepy1} from "./Components/emotions";
function App() {
  const emotionSelector=(event)=>{
    event.preventDefault();
    const ref_id=event.target.id;
    console.log("grg",ref_id);
  }
  return (
    <form className="dec" onSubmit={emotionSelector}>
      <button type="submit" id="recent" className="dec-child">
        <svg>
          <circle cx="20" cy="15" r="10px" stroke="grey" strokeWidth="1px" fill="rgb(218, 214, 214)"/>
          <rect x="20" y="8" width="1px" height="8px" stroke="grey" strokeWidth="1px" fill="rgb(218, 214, 214)"/>
          <rect x="20" y="15" width="8px" height="1px" stroke="grey" strokeWidth="1px" fill="rgb(218, 214, 214)"/>
        </svg>
        <hr className="cir-pos" style={{width:"50px",borderRadius:"200px",height:"2px",backgroundColor:"rgb(14, 211, 162)"}}></hr>
      </button>
      <button type="submit" id="smile"  className="dec-child">
        <svg>
          <circle cx="26" cy="15" r="10px" stroke="grey" strokeWidth="1px" fill="none"/>
          <path d="M20 17 Q26 21 32 17" stroke="grey" strokeWidth="1px" fill="none"/>
          <path d="M20 17 Q26 24 32 17" stroke="grey" strokeWidth="1px" fill="none"/>
          <circle cx="23" cy="13" r="1" stroke="grey" strokeWidth="1px" fill="grey"/>
          <circle cx="28" cy="13" r="1" stroke="grey" strokeWidth="1px" fill="grey"/>
        </svg>
        <hr  className="smil-pos" style={{width:"50px",borderRadius:"200px",height:"2px",backgroundColor:"rgb(14, 211, 162)"}}></hr>
      </button>
      <button type="submit" id="hand" className="dec-child">
        <p style={{fontSize:"20px"}}>&#129306;</p>
        <hr className="rem-pos" style={{width:"50px",borderRadius:"200px",height:"2px",backgroundColor:"rgb(14, 211, 162)"}}/>
      </button>
      <button id="gift" className="dec-child" >
        <p style={{fontSize:"20px"}}>&#127873;</p>
        <hr className="rem-pos" style={{width:"50px",borderRadius:"200px",height:"2px",backgroundColor:"rgb(14, 211, 162)"}}/>
      </button>
      <button id="sports" className="dec-child" >
        <p style={{fontSize:"20px"}}>&#9917;</p>
        <hr className="rem-pos" style={{width:"50px",borderRadius:"200px",height:"2px",backgroundColor:"rgb(14, 211, 162)"}}/>
      </button>
      <button id="animal" className="dec-child" >
        <p style={{fontSize:"20px"}}>&#128041;</p>
        <hr className="rem-pos" style={{width:"50px",borderRadius:"200px",height:"2px",backgroundColor:"rgb(14, 211, 162)"}}/>
      </button>
    </form>
  );
}

export default App;
