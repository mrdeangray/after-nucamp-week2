//Using of src attribute in this way means, your image will be loaded from the absolute path "///images/resto.png" for your site. Images directory should be located at the root of your site. 

import { useState, useCallback, useEffect } from 'react'
import players from '../data/players'
//const initials = [{ initial: 'J', active: false }, { initial: 'M', active: false }, { initial: 'A', active: false }]
const initials = [{ initial: 'J', active: false }, { initial: 'M', active: false }, { initial: 'A', active: false }]

const Challenge8 = () => {
    const [playerInitials, setPlayerInitials] = useState([])

    useEffect(() => {
        getPlayerInitials()
    }, [])

    const handleClick = (char) => {
        const remainingObj = initials.filter(obj => obj.initial !== char)
        // if (!selectedbutton.active) {
        //     console.log("false")
        //     console.log(initials)
        // }
        // else {
        //     console.log("true")
        // }

    }

    const getPlayerInitials = () => {
        setPlayerInitials(
            <ul>
                {
                    initials.map((elem, idx) => (
                        <button className='challenge7-buttons' onClick={() => handleClick(elem.initial)} key={idx}>{elem.initial}</button>
                    ))
                }
            </ul>
        )
    }

    return (


        <div className='challenge8'>
            <h2>Challenge8</h2>
            {playerInitials}
            {
                players.map((player, idx) => (
                    <li key={idx}>
                        {player.name}
                        {/* <img src="/img-players/Joe.png" alt="" /> */}
                        <img className="player-image" src={`/img-players/${player.image}`} alt="" />
                        {/* <img src="#" alt="" /> */}
                    </li>
                ))
            }
        </div>
    )
}
// src\data\img-players\Joe.png
export default Challenge8