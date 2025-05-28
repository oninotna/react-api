import axios from "axios";
import { useState, useEffect } from "react";
const urlApiAcctresses = "https://lanciweb.github.io/demo/api/actresses/";
const urlApiActor = "https://lanciweb.github.io/demo/api/actors/";

import CastingActressesList from "./castingComponents/CastingAcctressesList.jsx";
import CastingActorList from "./castingComponents/CastingActorList.jsx";

export default function Main() {
  const [dataActresses, setDataActresses] = useState([]);
  const [dataActor, setDataActor] = useState([]);
  const [dataList, setDataList] = useState([]);

  const callListActress = () => {
    axios.get(urlApiAcctresses).then((res) => {
      const dataActresses = res.data;
      console.log(dataActresses);

      setDataActresses(dataActresses);
    });
  };

  const callListActor = () => {
    axios.get(urlApiActor).then((res) => {
      const dataActor = res.data;
      console.log(dataActor);

      setDataActor(dataActor);
      setDataList(dataActor);
    });
  };

  const callAllActors = () => {
    callListActress();
    callListActor();
  };

  const handleClickActressesList = () => setDataList(dataActresses);
  const handleClickActorList = () => setDataList(dataActor);
  const handleClickTotalList = () => {
    const tmpArr = [];
    for (let index = 0; index < dataActor.length; index++) {
      const element = dataActor[index];
      tmpArr.push({
        ...element,
        id: element.id + "M",
      });
    }
    for (let index = 0; index < dataActresses.length; index++) {
      const element = dataActresses[index];
      tmpArr.push({
        ...element,
        id: element.id + "F",
      });
    }
    console.log(tmpArr);
    
    //const overAllList = [...dataActor, ...dataActresses];
    setDataList(tmpArr);
  };

  useEffect(callAllActors, []);

  return (
    <div className="container">
      <div className="mb-3">
        <button
          className="btn btn-primary me-2"
          onClick={() => {
            handleClickActressesList();
          }}
        >
          Casting Attrici
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => {
            handleClickActorList();
          }}
        >
          Casting Attori
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleClickTotalList();
          }}
        >
          Casting Totale
        </button>
      </div>
      <div className="row g-2">
        {/* {JSON.stringify(dataList)} */}
        {/* <CastingActressesList dataActresses={dataActresses}/>
            <CastingActorList dataActor={dataActor}/> */}
        <CastingActorList dataActor={dataList} />
      </div>
    </div>
  );
}
