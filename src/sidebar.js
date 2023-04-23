import React, {useState} from "react";
import './reelsidebar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import db from './firebase';
import {red} from "@mui/material/colors";

function Reelsidebar({likes,id,user})
{
    const [liked,set_liked]=useState(false);
    const [likedreel,set_likedreel]=useState(id);
    const addrecreel=()=>{
        set_likedreel(likedreel)
        db.collection("users").doc(user+'/likedreels/'+id).set({

            shortcode:id
        }
        )
    }
    return(
        <div className="reelsidebar">
            <div className="likebutton">
                {
                    liked?(
                        <FavoriteIcon
                            className="filledheart"


                            onClick={e=>set_liked(false)}

                        />
                    ):(
                        <FavoriteBorderIcon
                            onClick={
                                e=>{
                                    addrecreel()
                                    set_liked(true)
                                    console.log(likedreel)
                                }
                        }

                        />
                    )
                }

                <p>{liked? likes+1 : likes}</p>

            </div>

        </div>
    )

}
export default Reelsidebar