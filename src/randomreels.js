import './reels.css';
import Reel from "./reel";
import './App.css'
import {useEffect, useState} from "react";
import db from './firebase';
import {BrowserRouter} from "react-router-dom";

function Randomreels() {

    const cuser="harsh";

    const[reels,setreels]=useState([])
    useEffect(() => {
        db.collection("reels").onSnapshot((snapshot) =>
            setreels(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (

        <div className="app">
            <div className="app_reel">

                {reels.map(
                    ({id,source,username,description,likes})=>(
                        <Reel id={id}
                              source={source}
                              username={username}
                              description={description}
                              likes={likes}
                              user={cuser}
                        />
                    )
                )}
            </div>
        </div>
    );
}

export default Randomreels;
