import Em from "./res.module.css";
import {sad1,worry1,angry1,happy1,smiley1,animals1,peace1,love1,joy1,laugh1,gift1,smile1,hands1,sports1,supper1,evil1,shy1,tasty1,confuse1,sleepy1} from "../emotions";
import { useEffect, useState } from "react";
const Res=(props)=>{
    const [data,setData]=useState(smiley1);
    useEffect(()=>{
        console.log(props);
        if(props.emotion==="smiley1"){
            setData(smiley1);
        }

    },[]);
    return (
        <div className={Em["emoji"]}>
            {data.map((val)=>{return <div>
                    <p>&#128513;</p>
                </div>
                console.log(val);
            })}
        </div>
    );

}

export default Res;