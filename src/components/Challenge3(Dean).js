
//Challenge3: 
//Create a Challenge3 component in the components directory.
//the component should retrieve and display the names from the players.js file in the data directory.
//the names should be grouped by the team, both by rows and columns.
//Add CSS rules to change the text color and background colors to match the team's color.
//add a CSS rule to the App.css file so the component's body is indented.
//Add a route/link for this component to the Header component.

import players from '../data/players'
import { useEffect, useState } from 'react';

const Challenge3 = () => {
    useEffect(() => {
        getNames()
        groupNames()
    }, [])


    const [names, setNames] = useState([])
    const [groupedNames, setGroupedNames] = useState({})


    const getNames = () => {
        const playerNames = players.reduce((acc, curr) => {
            return [...acc, curr.name]
        }, [])
        setNames(playerNames)
    }

    const groupNames = () => {
        const names = players.reduce((acc, curr) => {
            acc[curr.team] ??= []
            acc[curr.team].push(curr.name)
            return acc
        }, {})
        setGroupedNames(names)
        // console.log(groupedNames)
    }

    const handleGroupByTeamCol = () => {

        setNames(<div>
            {
                Object.entries(groupedNames).map((elem, idx) => {
                    return (
                        <div style={{
                            backgroundColor: elem[0].toLowerCase(),
                            width: "100px",
                            color: "white",
                            display: "inline-block"
                        }}
                            key={idx}>{elem[0]}:
                            <ul>
                                {elem[1].map((el, idx) => {
                                    return (
                                        <li key={idx}>{el}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })
            }
        </div>)
    }
    const handleGroupByTeamRow = () => {
        setNames(<div>
            <ul>
                {
                    Object.entries(groupedNames).map((elem, idx) => {
                        return (
                            <li style={{ color: elem[0].toLowerCase() }}
                                key={idx}>{elem[0]}:   {elem[1].toString().replaceAll(',', ', ')}
                            </li>
                        )
                    })
                }
            </ul>
        </div>)
    }


    return (
        <div className='challenge1'>
            <h2>Challenge3</h2>
            <br />
            <h6>Names of players:  </h6>
            {names}

            <br />
            <button onClick={handleGroupByTeamRow}>Group by team (rows)</button>
            {`   `}
            <button onClick={handleGroupByTeamCol}>Group by team (columns)</button>

        </div>
    )
}

export default Challenge3