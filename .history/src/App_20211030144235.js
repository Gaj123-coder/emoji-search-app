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
          <circle cx="14" cy="15" r="10px" stroke="grey" strokeWidth="1px" fill="rgb(218, 214, 214)"/>
          <circle cx="15" cy="14" r="6px" stroke="grey" strokeWidth="1px" fill="rgb(218, 214, 214)"/>
        </svg>
      </div>
      <div>
        <svg>
          <ellipse cx="110" cy="100" rx="100" ry="50" stroke="grey" strokeWidth="1px" fill="rgb(218, 214, 214)"/>
          <ellipse cx="70" cy="70 " rx="50" ry="30" stroke="grey" strokeWidth="1px" fill="rgb(218, 214, 214)"/>
          <ellipse cx="40" cy="70" rx="34" ry="67" stroke="grey" strokeWidth="1px" fill="rgb(218, 214, 214)"/>
          <ellipse cx="10" cy="10" rx="10" ry="10" stroke="grey" strokeWidth="1px" fill="rgb(218, 214, 214)"/>
        </svg> 
      </div>
    </div>
  );
}

export default App;
