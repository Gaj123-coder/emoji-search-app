import Em from "./res.module.css";
import {sad1,worry1,angry1,happy1,smiley1,animals1,peace1,love1,joy1,laugh1,gift1,smile1,hands1,sports1,supper1,evil1,shy1,tasty1,confuse1,sleepy1} from "../emotions";
import { useState } from "react";
const Res=(props)=>{
    const [data,setsetData]=useState(smiley1);
    console.log(data);
    return (
        <div className={Em["emoji"]}>
            {data.map((val)=>{
                <p style={{fontSize:"40px"}}>kdsbgkr</p>
            })}
        </div>
    );

}

export default Res;