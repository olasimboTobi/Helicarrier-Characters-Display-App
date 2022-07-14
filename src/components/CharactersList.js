import React from 'react';
import "./CharactersList.css"




function CharactersList({character}) {

  
  return (
    <div className="CharacterList">
        <div key={character.id} className="character--container">
            <div className="data--container">
                <img src={character.image} alt="Img" className="img--character"/>
                <div className="group--character">
                  <h2 className="name--character">Name: {character.name}</h2>
                  <h2 className="status--character">Status: {character.status}</h2>
                  <h2 className="type--character">Type: {character.type}</h2>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default CharactersList