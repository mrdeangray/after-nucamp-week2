import React, { useState } from 'react';
import playerData from '../data/players'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Challenge10Dean = () => {
    const [players, setPlayers] = useState([...playerData]);

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(players);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setPlayers(items);
    }


    return (
        <div className='challenge10-dean'>
            <h2>Challenge10</h2>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='players'>
                    {(provided) => (
                        <div className="players" {...provided.droppableProps} ref={provided.innerRef}>
                            {players.map(({ id, name, image }, index) => {
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <div className='player'>
                                                    <span> {id}</span>
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
            </DragDropContext>
        </div>
    )
}

export default Challenge10Dean 