
//Challenge8:
//Create a Challenge8 component in the components directory.
//The component should retrieve and display the names and images from the players.js file in the data directory.
//The component should have two columns: Active and Inactive
//Clicking each image in the Active column will move the player to the Inactive column
//Clicking each image in the Inactive column will not do anything(for this challenge)
//Both active and inactive columns should keep a count of their players.
//Add CSS rules for the hover state of the players in the active column.
//add a CSS rule to the App.css file so the component's body is indented.
//Add a route/link for this component to the Header component.

import { setIn } from "formik";
import { useCallback, useEffect, useState } from "react"
import players from "../data/players";





const Challenge8 = () => {
    const [activePlayers, setActivePlayers] = useState([]);
    const [inactivePlayers, setInactivePlayers] = useState([]);

    const fetchPlayers = useCallback(
      () => {
        
        setActivePlayers([...players])
      },
      [],
    )
    
    const movePlayer =
    (playerToRemove)=> {
        setActivePlayers(activePlayers.filter(player=>player.name!==playerToRemove.name))
        setInactivePlayers([...inactivePlayers, playerToRemove])
    }
    
    useEffect(() => {
        fetchPlayers();
    }, [])
    
  return (
    <div className="challenge8">
        
        <div className="active-players">
            <h5>Active Players: {activePlayers.length}</h5> 
            <ul>
                {activePlayers.map((player, index)=>(
                    <li className='player-box' key={index} onClick={()=>movePlayer(player)}>
                        {player.name}
                        <img  
                            className='player-img' 
                            src={`/img-players/${player.image}`} 
                            alt={player.name}
                        />
                    </li>
                ))}
            </ul>
        </div>
        <div className="inactive-players">
            <h5>Inactive Players: {inactivePlayers.length}</h5>
        <ul>
                {inactivePlayers.map((player, index)=>(
                    <li className='player-box' key={index} >
                        {player.name}
                        <img  
                            className='player-img' 
                            src={`/img-players/${player.image}`} 
                            alt={player.name}
                        />
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Challenge8

