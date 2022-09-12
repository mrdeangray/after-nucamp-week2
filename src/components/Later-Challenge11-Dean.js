import { useState, useCallback, useEffect } from 'react'
import playerData from '../data/players'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const grouped = [
    { id: '0', name: "Joe", team: "Green", score: 20, image: "Joe.png", position: "Forward" },
    { id: '1', name: "Alex", team: "Green", score: 10, image: "Alex.png", position: "Defender" },
    { id: '2', name: "Jessica", team: "Blue", score: 15, image: "Jessica.jpg", position: "Forward" },
    { id: '3', name: "Fred", team: "Blue", score: 12, image: "Fred.png", position: "Forward" },
    { id: '4', name: "Monica", team: "Blue", score: 23, image: "Monica.jpg", position: "Defender" },
    { id: '5', name: "Sarah", team: "Green", score: 17, image: "Sarah.jpg", position: "Goalie" },
    { id: '6', name: "Mark", team: "Red", score: 14, image: "Mark.png", position: "Forward" },
    { id: '7', name: "Jordyn", team: "Blue", score: 14, image: "Jordyn.jpg", position: "Goalie" },
    { id: '8', name: "Ashley", team: "Blue", score: 11, image: "Ashley.png", position: "Forward" },
    { id: '9', name: "Clayton", team: "Green", score: 9, image: "Clayton.jpg", position: "Forward" },
    { id: '10', name: "Julia", team: "Red", score: 10, image: "Julia.jpg", position: "Forward" },
    { id: '11', name: "Carol", team: "Red", score: 24, image: "Carol.jpg", position: "Goalie" },
    { id: '12', name: "Miles", team: "Green", score: 18, image: "Miles.jpg", position: "Forward" },
    { id: '13', name: "Adam", team: "Red", score: 11, image: "Adam.jpg", position: "Defender" },
    { id: '14', name: "Landon", team: "Red", score: 14, image: "Landon.png", position: "Forward" },
]

const Challenge11Dean = () => {
    const [players, setPlayers] = useState([...playerData]);
    const [activePlayers, setActivePlayers] = useState([]);
    const [inactivePlayers, setInactivePlayers] = useState([]);
    const [displayTeams, setDisplayTeams] = useState([])
    const [grouped, setGrouped] = useState({ green: [], red: [] })


    const removePlayer = () => {
        console.log("remove")
    }


    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(players);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setPlayers(items);
    }


    const getItemStyle = (isDragging, draggableStyle) => ({

        background: isDragging ? "rgb(17, 4, 10)" : "rgb(1, 132, 176)"
        // background: isDragging ? "rgb(17, 4, 10)" : "rgb(1, 132, 176)"

    });

    const getTeams = useCallback(() => {
        const groupedPlayers = players.reduce((acc, curr) => {
            acc[curr.team] ??= []
            acc[curr.team].push(curr)
            return acc
        }, {})
        setGrouped(groupedPlayers)
        console.log(groupedPlayers)
        //console.log(Object.keys(groupedPlayers))
        // setDisplayTeams(
        //     <div className='container'>
        //         {
        //             Object.keys(groupedPlayers).sort().map((team, idx) => (
        //                 <Droppable key={idx} droppableId={team}>
        //                     <div key={idx} className='team'>
        //                         <h4>Team: {team}</h4>
        //                         {
        //                             groupedPlayers[team].map((player, idx) => (
        //                                 <li onClick={() => removePlayer(player.id)} className="player" key={idx} style={{ backgroundColor: team.toLowerCase() }}>{player.name}
        //                                     <img className="player-image" src={`/img-players/${player.image}`} alt="" />
        //                                 </li>
        //                             ))
        //                         }

        //                     </div>
        //                 </Droppable>
        //             ))

        //         }
        //     </div>

        // )

    }, [players])

    useEffect(() => {
        getTeams()
    }, [getTeams, players])


    return (
        <div className='challenge11-dean'>
            <h2>Challenge 11</h2>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <div className='container'>
                    <Droppable droppableId='inactive-players'>
                        {(provided) => (
                            <div className="players" {...provided.droppableProps} ref={provided.innerRef}>
                                <p>Active</p>
                                {players.map(({ id, name, image }, index) => {
                                    return (
                                        <Draggable key={id} draggableId={id} index={index}>
                                            {(provided, snapshot) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <div className='player'
                                                        style={getItemStyle(
                                                            snapshot.isDragging,
                                                            provided.draggableProps.style
                                                        )}

                                                    >
                                                        <span> {index}</span>
                                                        <img className="player-image" src={`/img-players/${image}`} alt="" />
                                                        <span> {name}</span>
                                                    </div>


                                                </div>
                                            )}

                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        )
                        }
                    </Droppable>

                    <Droppable droppableId='players'>
                        {(provided) => (
                            <div className="players" {...provided.droppableProps} ref={provided.innerRef}>
                                <p>Inactive</p>
                                {activePlayers.map(({ id, name, image }, index) => {
                                    return (
                                        <Draggable key={id} draggableId={id} index={index}>
                                            {(provided, snapshot) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <div className='player'
                                                        style={getItemStyle(
                                                            snapshot.isDragging,
                                                            provided.draggableProps.style
                                                        )}
                                                    >
                                                        <span> {index}</span>
                                                        <img className="player-image" src={`/img-players/${image}`} alt="" />
                                                        <span> {name}</span>
                                                    </div>


                                                </div>
                                            )}

                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        )
                        }
                    </Droppable>
                    {/* {displayTeams} */}
                    <div>
                        {
                            Object.keys(grouped).sort().map((team, idx) => (
                                <div key={idx} >
                                    <Droppable droppableId={team}>
                                    </Droppable>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </DragDropContext>
        </div>
    )
}

export default Challenge11Dean 