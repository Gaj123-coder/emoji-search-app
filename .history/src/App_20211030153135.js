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
          <polygon points="100,0 0,10 3,300" stroke="grey" strokeWidth="1px" fill="rgb(218, 214, 214)"/>
          <polyline points="1,1115 200,100 3,445" stroke="red" strokeWidth="1px" fill="rgb(255,255,255)"/>
          <polyline points="1,100 100,200 200,300 300,400 400,500"stroke="red" strokeWidth="1px" fill="rgb(255,255,255)"/>
          <polyline points="1,100 200,300 500,800 1500,3000" stroke="ornage" strokeWidth="3px" fill="rgb(255,255,255)"/>
          </svg>
      </div>  
    </div>
  );
}

export default App;
