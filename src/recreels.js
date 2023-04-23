import './reels.css';
import React from "react";
import Reel from "./reel";
import Reelrec from "./reelcompforrec";
import './App.css'
import {useEffect, useState} from "react";
import db from './firebase';


function Recreels() {
    const cuser="harsh";


    let templikedreels=[]
    var likedreelcolref=db.collection('users/'+cuser+'/likedreels')

    useEffect(()=>{
        likedreelcolref.get()
            .then(
                (querySnapshot)=>{
                    querySnapshot.forEach(
                        (doc)=>{
                            templikedreels.push(doc.id)
                        }
                    )
                    for(let i=0;i<templikedreels.length;i++)
                    {
                        let tempreccommendedreels=[]
                        fetch('http://127.0.0.1:5000/recommends/'+templikedreels[i].trim())
                            .then((response)=>response.json())
                            .then((data)=>{
                                tempreccommendedreels.push(data);
                                console.log(tempreccommendedreels.length)
                                tempreccommendedreels.forEach(function (obj){
                                    console.log(tempreccommendedreels)
                                    for(let j=0;j<5;j++){
                                        db.collection('users/'+cuser+'/recreels/').doc(obj[j].id)
                                            .set({
                                                id:obj[j].id,
                                                description:obj[j].description,
                                                source:obj[j].source,
                                                username:obj[j].username
                                            })
                                    }
                                })
                                }
                            );
                    }
                }
                //this is harsh mali signing off
            )
    },[])

    /*useEffect(()=>{

        console.log(templikedreels[0])
        fetch('http://127.0.0.1:5000/recommends/'+shortcode)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                set_rreels(data);
            }).catch((err) => {
            console.log(err.message);
        });
    }, [])

    rreels.forEach(function (obj){
        db.collection('users/'+cuser+'/recreels/').doc(obj.id)
            .set({
                id:obj.id,
                description:obj.description,
                source:obj.source,
                username:obj.username
            })

    })

     */

    const[reels,setreels]=useState([])

    useEffect(() => {
        db.collection("users/"+cuser+'/recreels').onSnapshot((snapshot) =>
            setreels(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        <div className="app">
            <div className="app_reel">
                {reels.map(
                    ({id,source,username,description})=>(
                        <Reelrec id={id}
                              source={source}
                              username={username}
                              description={description}
                              user={cuser}
                        />
                    )
                )}
            </div>
        </div>
    );
}

export default Recreels
