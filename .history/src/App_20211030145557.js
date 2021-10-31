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
          <line x1="0" y1="0" x2="100" y2="2" stroke="red" strokeWidth="2px"/>
          <line x1="5" x2="3" y1="10" y2="123" stroke="red" strokeWidth="2px"/>
          <circle cx="100" cy="100" r="40" stroke="grey" strokeWidth="1px" fill="rgb(218, 214, 214)"/>
          <rect width="200px" height="50px" fill="yellow" stroke="red" strokeWidth="2px"/>
          <ellipse cx="10" cy="20" rx="5" ry="14" stroke="grey" strokeWidth="2px" fill="rgb(218, 214, 214)"/>
          <ellipse cx="10" cy="20" rx="1" ry="2" stroke="grey" strokeWidth="2px" fill="rgb(218,214,214)"/> 
       </svg> 
      </div>  
    </div>
  );
}

export default App;
