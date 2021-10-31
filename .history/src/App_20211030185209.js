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
         <polyline points="1,1 10,10 200,200" stroke="red" strokeWidth="1px" fill="yellow"/>
         <polygon points="1,1 10,90 200,800 1,1" stroke="green" strokeWidth="1px" fill="yellow"/> 
         <g>
           <circle id="pointA" cx="1" cy="1" r="3"/>
           <circle id="pointB" cx="148" cy="148" r="3"/>
           <circle id="pointC" cx="100" cy="700" r="3"/>
         </g> 
       </svg>
      </div>  
    </div>
  );
}

export default App;
