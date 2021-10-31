import React, { useState } from "react";
import Res from "./Components/Result/result";
import "./App.css";
function App() {
  const [emotion, setEmotion] = useState("smiley1");
  const emotionSelector = (event) => {
    event.preventDefault();
    const ref_id = event.target.id;
    setEmotion(ref_id);
  };
  return (
    <React.Fragment>
      <form className="dec">
        <button
          type="submit"
          id="recent1"
          className="dec-child"
          onClick={emotionSelector}
        >
          <svg>
            <circle
              cx="20"
              cy="15"
              r="10px"
              stroke="grey"
              strokeWidth="1px"
              fill="rgb(218, 214, 214)"
            />
            <rect
              x="20"
              y="8"
              width="1px"
              height="8px"
              stroke="grey"
              strokeWidth="1px"
              fill="rgb(218, 214, 214)"
            />
            <rect
              x="20"
              y="15"
              width="8px"
              height="1px"
              stroke="grey"
              strokeWidth="1px"
              fill="rgb(218, 214, 214)"
            />
          </svg>
          <hr
            className="cir-pos"
            style={{
              width: "50px",
              borderRadius: "200px",
              height: "2px",
              backgroundColor:
                "recent1" === emotion ? "rgb(14, 211, 162)" : "white",
            }}
          ></hr>
        </button>
        <button
          type="submit"
          id="smiley1"
          className="dec-child"
          onClick={emotionSelector}
        >
          <svg>
            <circle
              cx="26"
              cy="15"
              r="10px"
              stroke="grey"
              strokeWidth="1px"
              fill="none"
            />
            <path
              d="M20 17 Q26 21 32 17"
              stroke="grey"
              strokeWidth="1px"
              fill="none"
            />
            <path
              d="M20 17 Q26 24 32 17"
              stroke="grey"
              strokeWidth="1px"
              fill="none"
            />
            <circle
              cx="23"
              cy="13"
              r="1"
              stroke="grey"
              strokeWidth="1px"
              fill="grey"
            />
            <circle
              cx="28"
              cy="13"
              r="1"
              stroke="grey"
              strokeWidth="1px"
              fill="grey"
            />
          </svg>
          <hr
            className="smil-pos"
            style={{
              width: "50px",
              borderRadius: "200px",
              height: "2px",
              backgroundColor:
                "smiley1" === emotion ? "rgb(14, 211, 162)" : "white",
            }}
          ></hr>
        </button>
        <button
          type="submit"
          id="hands1"
          className="dec-child"
          onClick={emotionSelector}
        >
          <p style={{ fontSize: "20px" }}>&#129306;</p>
          <hr
            className="rem-pos"
            style={{
              width: "50px",
              borderRadius: "200px",
              height: "2px",
              backgroundColor:
                "hands1" === emotion ? "rgb(14, 211, 162)" : "white",
            }}
          />
        </button>
        <button
          type="submit"
          id="gift1"
          className="dec-child"
          onClick={emotionSelector}
        >
          <p style={{ fontSize: "20px" }}>&#127873;</p>
          <hr
            className="rem-pos"
            style={{
              width: "50px",
              borderRadius: "200px",
              height: "2px",
              backgroundColor:
                "gift1" === emotion ? "rgb(14, 211, 162)" : "white",
            }}
          />
        </button>
        <button
          type="submit"
          id="sports1"
          className="dec-child"
          onClick={emotionSelector}
        >
          <p style={{ fontSize: "20px" }}>&#9917;</p>
          <hr
            className="rem-pos"
            style={{
              width: "50px",
              borderRadius: "200px",
              height: "2px",
              backgroundColor:
                "sports1" === emotion ? "rgb(14, 211, 162)" : "white",
            }}
          />
        </button>
        <button
          type="submit"
          id="animals1"
          className="dec-child"
          onClick={emotionSelector}
        >
          <p style={{ fontSize: "20px" }}>&#128041;</p>
          <hr
            className="rem-pos"
            style={{
              width: "50px",
              borderRadius: "200px",
              height: "2px",
              backgroundColor:
                "animals1" === emotion ? "rgb(14, 211, 162)" : "white",
            }}
          />
        </button>
      </form>
      <Res emotion={emotion} />
    </React.Fragment>
  );
}

export default App;
