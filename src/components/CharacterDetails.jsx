import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import {apiKey} from "../Keys.jsx";

const CharacterDetails = () => {
    const {id} = useParams();
    const [characterData, setCharacterData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    // useEffect to fetch data on start and url change
    useEffect(() => {
        const fetchData = async () =>{
            try {
            const {data: response} = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}${apiKey}`);
            setCharacterData(response.data.results[0]);
            setIsLoading(false)
            } catch (error) {
            console.error(error.message);
            }
        }

        fetchData();
    }, []);
  // function to display the character data
  function displayCharacter(data){
    return <div style={{display: "flex"}}>
      <div style={{width: "50%", height: "600px", position: "relative"}}>
        {/* character name plate */}
        <h2
          style={{backgroundColor: "gold",
                  position: "absolute",
                  textAlign: "center",
                  left: "50%",
                  top: "10%",
                  transform: "translate(-50%, -50%)", 
                  width: "85%",
                  padding: "10px",
                  border: "solid 5px black"
                 }}
          >{data.name}</h2>
        <img 
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`} 
          style={{height: "100%",
                  width: "100%",
                 objectFit: "cover"}}
          />
        {/* conditionally create description if there is text for it */}
        {(data.description != "") &&
        <p
          style={{backgroundColor: "gold",
                  position: "absolute",
                  left: "50%",
                  top: "85%",
                  transform: "translate(-50%, -50%)", 
                  width: "85%",
                  padding: "10px",
                  border: "solid 5px black"
                 }}
          >{data.description}</p>}
      </div>
      <div style={{width: "50%"}}>
        {/* list of comics */}
        <ul style={{listStyleType: "none", padding: "0px", marginTop: "0px"}}>
        {data.comics.items.map((x, i) => <li
                                      key={i}
                                      style={{width: "100%", 
                                             backgroundColor: "red", 
                                             border: "solid 2px black",
                                              color: "white",
                                              textShadow: "0 0 3px black, 0 0 5px black"
                                             }}
                                      ><strong>{x.name}</strong></li>)}
      </ul>
      </div>
    </div>
  }
  
  return <div style={{maxWidth: "1050px"}}>
    {isLoading === true && <p style={{margin: "auto"}}>...loading</p>}
    {/* conditionally render character data if it exists */}
    {isLoading === false && characterData.name && displayCharacter(characterData)}
  </div>
}

export default CharacterDetails