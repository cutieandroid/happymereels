import React, {useState} from "react";
import './reelsidebar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {red} from "@mui/material/colors";

function Reelsidebar({likes})
{
    const [liked,set_liked]=useState(false);

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
                            onClick={e=>set_liked(true)}
                        />
                    )
                }



                <p>{liked? likes+1 : likes}</p>

            </div>






        </div>
    )


}
export default Reelsidebar