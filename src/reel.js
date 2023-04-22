import React, {useRef, useState} from "react";
import './reels.css';
import Reelfooter from "./reelfooter"
import Reelsidebar from "./sidebar";


function Reel({source,username, description,likes}){
    const reelref=useRef(null);
    const[playing,setplaying]=useState(false);

    const onreelpress=()=>{
        if(playing){
            reelref.current.pause();
            setplaying(false);
        }
        else{
            reelref.current.play();
            setplaying(true);
        }


    }
    return (

        <div className="reel">

            <video
                className="reel_player"
                loop
                onClick={onreelpress}
                ref={reelref}
                src={source}>

            </video>

            <Reelfooter username={username}
                       description={description}  />

            <Reelsidebar likes={likes}/>



        </div>





    );
}


export default Reel