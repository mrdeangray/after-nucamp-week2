//Challenge1: 
//Create a Challenge1 component in the components directory.
//the component should retrieve and display only the names from the players.js file in the data directory.
//the component should use: useEffect, useState, and array.reduce().
//add a CSS rule to the App.css file so the component's body is indented.
//Add a route/link for this component to the Header component.

import { useEffect, useState } from "react";

import players from '../data/players'

const Challenge1 = () => {
    const [playersData, setPlayersData] =  useState([...players])
    const [playerList, setPlayerList] = useState('') 
    const namesToString = () => {
        setPlayerList(
            playersData.reduce((acc, cur)=>{
                if(acc){
                    acc+= ', ';
                }
                acc+=cur.name ;
                return acc;
                },'')
        )
    }   
    useEffect(()=>{
        namesToString();
    },[])

    const sortAscending = () => {
        setPlayersData(playersData.sort((a,b)=> {
            if(a.name.toUpperCase() < b.name.toUpperCase()){
                return -1;
            }
            else {
                return 1;
            }
        }))
        namesToString();
    }


    const sortDescending = () => {
        setPlayersData(playersData.sort((a,b)=> {
            if(a.name.toUpperCase() > b.name.toUpperCase()){
                return -1;
            }
            else {
                return 1;
            }
        }))
        
        namesToString();
    }
  return (
    <div className='challenge1'>
        <div>
            <h2>Challenge 1</h2>
            <br />
            <h5>Names of Players:</h5>
            <p>{playerList}</p>
        </div>
        <br />
        <div>
            <button onClick={sortAscending}>Sort Ascending</button>    
            {'  '}
            <button onClick={sortDescending}>Sort Descending</button>    
        </div>
        
    </div>
  )
}

export default Challenge1
