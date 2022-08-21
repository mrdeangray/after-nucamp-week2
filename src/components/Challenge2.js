
//Challenge2:
//Create a Challenge2 component in the components directory.
//the component should retrieve and display the names from the players.js file in the data directory.
//the names should be grouped by the first letter in the name.
//the component should use: useEffect, useState, array.reduce(), and array.map().
//add a CSS rule to the App.css file so the component's body is indented.
//Add a route/link for this component to the Header component.

import { useState } from "react"
import players from "../data/players"

const Challenge2 = () => {
    const [sortedNames, setSortedNames]=useState({});
    
    const [sorted, setSorted]= useState(false);
     
    const sortNamesByFirstLetter=()=>{
        setSortedNames(
            players.reduce((acc,cur)=>{
            const firstLetter=cur.name[0].toUpperCase();
            
            if(acc[firstLetter]){
                acc[firstLetter].push(cur.name);
            }
            else{
                acc[firstLetter]=[cur.name]
            }
            return acc;
          },{})) 
          setSorted(true);
    
    }  
    
    
        
    return (
    <div className='challenge2'>
        <h5>Names of Players:</h5>
        {sorted?(
            <ul>
                {Object.keys(sortedNames).map((key) => (
                     <li>
                        {key}: {sortedNames[key].join(', ')}
                    </li>
                ))}
            </ul>    
        ):(
            <div>
                {
                    players.map((player)=>(
                    <span>{player.name}{' '}</span>
                 ))}
                 <br /><br />
                 <button onClick={sortNamesByFirstLetter}>Sort By Letter</button>
            </div>
        )}
        
        
    </div>
  )
}

export default Challenge2

