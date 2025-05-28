import axios from 'axios';
import { useState, useEffect } from 'react'
const urlApiAcctres = "https://lanciweb.github.io/demo/api/actresses/";
const urlApiActor = "https://lanciweb.github.io/demo/api/actors/";

export default function Main () {
    axios.get(urlApiAcctres)
    .then(res => {
        console.log(res.data);
        
    }) 

    return (
    <div className="container">
    </div>
    )
}
