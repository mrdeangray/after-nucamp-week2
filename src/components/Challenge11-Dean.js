import React, { useState, useCallback, useEffect } from 'react';
import playerData from '../data/players'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const Challenge11Dean = () => {
    const [activePlayers, setActivePlayers] = useState([...playerData]);
    const [inactivePlayers, setInactivePlayers] = useState([]);
    const [displayInactiveList, setDisplayInactiveList] = useState(<div></div>);

    function handleOnDragEnd(result) {
        console.log(result)

        if (!result.destination) return;
        if (result.destination.droppableId !== result.source.droppableId) {
            if (result.destination.droppableId === "inactive-players") {
                const items = Array.from(activePlayers);
                items.splice(result.source.index, 1)
                const movedPlayer = activePlayers[result.source.index]
                setActivePlayers(items);


                const inactiveItems = Array.from(inactivePlayers);
                inactiveItems.splice(result.destination.index, 0, movedPlayer);
                setInactivePlayers(inactiveItems);

            }
            if (result.destination.droppableId === "active-players") {

                const items = Array.from(inactivePlayers);
                items.splice(result.source.index, 1)
                const movedPlayer = inactivePlayers[result.source.index]
                setInactivePlayers(items);


                const activeItems = Array.from(activePlayers);
                activeItems.splice(result.destination.index, 0, movedPlayer);
                setActivePlayers(activeItems);

            }
        }
        else {

            if (result.destination.droppableId === "active-players") {
                const items = Array.from(activePlayers);
                const [reorderedItem] = items.splice(result.source.index, 1);
                items.splice(result.destination.index, 0, reorderedItem);

                setActivePlayers(items);
            }
            if (result.destination.droppableId === "inactive-players") {
                const items = Array.from(inactivePlayers);
                const [reorderedItem] = items.splice(result.source.index, 1);
                items.splice(result.destination.index, 0, reorderedItem);

                setInactivePlayers([...items]);
            }
        }

    }


    const getItemStyle = (isDragging, draggableStyle) => ({

        background: isDragging ? "rgb(17, 4, 10)" : "rgb(1, 132, 176)"

    });

    const updateInactive = useCallback(() => {
        setDisplayInactiveList(
            <Droppable droppableId='inactive-players'>
                {(provided) => (
                    <div className="players" {...provided.droppableProps} ref={provided.innerRef}>
                        <p>Inactive</p>
                        {inactivePlayers.map(({ id, name, image }, index) => {
                            return (
                                <Draggable key={index} draggableId={`dean${id}`} index={index}>
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
        )
        console.log(inactivePlayers)
    }, [inactivePlayers])
    useEffect(() => {
        // updateInactive()
        setDisplayInactiveList(
            <Droppable droppableId='inactive-players'>
                {(provided) => (
                    <div className="players" {...provided.droppableProps} ref={provided.innerRef}>
                        <p>Inactive</p>
                        {inactivePlayers.map(({ id, name, image }, index) => {
                            return (//draggableId={`inactive${id}`
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
        )



    }, [inactivePlayers, updateInactive])

    return (
        <div className='challenge11-dean'>
            <h2>Challenge 11</h2>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <div className='container'>
                    <Droppable droppableId='active-players'>
                        {(provided) => (
                            <div className="players" {...provided.droppableProps} ref={provided.innerRef}>
                                <p>Active</p>
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

                    {displayInactiveList}
                </div>
            </DragDropContext>
        </div>
    )
}

export default Challenge11Dean 