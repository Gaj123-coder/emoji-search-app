import './App.css';
import {sad1,worry1,angry1,happy1,smiley1,peace1,love1,joy1,laugh1,gift1,smile1,hands1,sports1,supper1,evil1,shy1,tasty1,confuse1,sleepy1} from "./Components/emotions";
function App() {
  return (
    <div className="dec">
      <div>
        <svg>
          <circle cx="20" cy="15" r="10px" stroke="grey" strokeWidth="1px" fill="rgb(218, 214, 214)"/>
          <rect x="20" y="8" width="1px" height="8px" stroke="grey" strokeWidth="1px" fill="rgb(218, 214, 214)"/>
          <rect x="20" y="15" width="8px" height="1px" stroke="grey" strokeWidth="1px" fill="rgb(218, 214, 214)"/>
        </svg>
      </div>
      <div>
        <svg>
          <circle cx="26" cy="15" r="10px" stroke="grey" strokeWidth="1px" fill="none"/>
          <path d="M20 17 Q26 21 32 17" stroke="grey" strokeWidth="1px" fill="none"/>
          <path d="M20 17 Q26 24 32 17" stroke="grey" strokeWidth="1px" fill="none"/>
          <circle cx="23" cy="13" r="1" stroke="grey" strokeWidth="1px" fill="grey"/>
          <circle cx="28" cy="13" r="1" stroke="grey" strokeWidth="1px" fill="grey"/>
        </svg>
      </div>
      <div>
        <svg>
          <circle cx="10" cy="15" r="10px" stroke="grey" strokeWidth="1px" fill="none"/>
          <path d="M5 15 Q10 20 15 15" stroke="grey" strokeWidth="1px" fill="none"/>
          <path d="M5 15 Q10 24 15 15" stroke="grey" strokeWidth="1px" fill="none"/>
          <circle cx="7" cy="12" r="1" stroke="grey" strokeWidth="1px" fill="grey"/>
          <circle cx="12" cy="12" r="1" stroke="grey" strokeWidth="1px" fill="grey"/>
        </svg>
      </div>
    </div>
  );
}

export default App;
