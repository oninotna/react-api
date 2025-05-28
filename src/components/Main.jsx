import axios from 'axios';
import { useState, useEffect } from 'react'
const urlApiAcctresses = "https://lanciweb.github.io/demo/api/actresses/";
const urlApiActor = "https://lanciweb.github.io/demo/api/actors/";

import CastingActressesList from './castingComponents/CastingAcctressesList.jsx';


export default function Main () {
    const [dataActresses, setDataActresses] = useState([])
    const [dataActor, setDataActor] = useState([]);

    const callListActress = () => {
        axios.get(urlApiAcctresses).then((res) => {
          const dataActresses = res.data;
          console.log(dataActresses);
          
          setDataActresses(dataActresses);
        });
    };
    
    useEffect(callListActress, []);

    return (
    <div className="container">
        <div className="row g-2">
            <CastingActressesList dataActresses={dataActresses}/>
        </div>
    </div>
    )
}
