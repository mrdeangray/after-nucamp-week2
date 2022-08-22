
//Challenge3:
//Create a Challenge3 component in the components directory.
//the component should retrieve and display the names from the players.js file in the data directory.
//the names should be grouped by the team, both by rows and columns.
//Add CSS rules to change the text color and background colors to match the team's color.
//add a CSS rule to the App.css file so the component's body is indented.
//Add a route/link for this component to the Header component.

import { useEffect, useState } from "react";
import players from "../data/players";

const Challenge3 = () => {
    const [sortedTeams, setSortedTeams] = useState([])
    const [display, setDisplay] = useState(<div></div>)

    const sortTeams = () =>{
        setSortedTeams(players.reduce((acc, cur)=>{
            acc[cur.team] ??= []
            acc[cur.team].push(cur.name);
            return acc
        },[]))
        console.log(sortedTeams)
    }

    useEffect(()=>{
        sortTeams(); 
       initialDisplay(); 
    },[]);

    //loads all the players name and creates a display div which will be updated when we sort the players
    const initialDisplay = () => {
        setDisplay(<div>{
            players.map((player)=>(
                <span>{player.name}{', '}</span>
            ))
            }</div>)
    }
    
    const groupByTeamRow = () =>{
        setDisplay(<ul>
            {Object.keys(sortedTeams).map((team, index)=>(
                <li style={{color: team.toLowerCase()}}>
                    {sortedTeams[team].join(', ')}
                </li>
        ))}
        </ul>)
    }

    const groupByTeamCol = () =>{
        setDisplay(<div style={{display: 'flex', flexDirection: 'row'}}>
            {Object.keys(sortedTeams).map((team)=>(
                
                    <ul style={{backgroundColor: team.toLowerCase(), color: 'white', padding: '25px'}}>
                        {sortedTeams[team].map((name, index) =>(
                            <li key={index}>
                                {name}
                            </li>
                        ))}
                    </ul>
                
        ))}
        </div>)
    }

    
    return (
    <div className="challenge3">
      <h2>Challenge 3</h2>
      <h5 >Names of Players</h5>
        {display}
        <br />
        <div>
            <button onClick={groupByTeamRow}>Group by Team(row)</button>
            {'  '}
            <button onClick={groupByTeamCol}>Group by Team(column)</button>
        </div>
    </div>
  )
}

export default Challenge3
