import './reels.css';
import Reel from "./reel";
import './App.css'
import {useEffect, useState} from "react";
import db from './firebase';

function App() {

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
                ({source,username,description,likes})=>(
                    <Reel source={source}
                          username={username}
                          description={description}
                          likes={likes}


                    />

                )
            )}


        </div>
    </div>
  );
}

export default App;
