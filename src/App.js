import './reels.css';
import Reel from "./reel";
import React from "react";
import './App.css'
import {useEffect, useState} from "react";
import db from './firebase';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Recreels from "./recreels";
import Randomreels from "./randomreels";

function App() {

    return (

        <BrowserRouter>
            <Routes>

                <Route path="/"
                       element={<Randomreels/>}
                >

                </Route>

                <Route path="/recreels"

                       element={<Recreels/>}>

                </Route>

            </Routes>


        </BrowserRouter>
    );
}

export default App;
