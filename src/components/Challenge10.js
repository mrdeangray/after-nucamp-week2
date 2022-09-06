import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import players from "../data/players";

const Challenge10 = () => {
    const [playersData, setPlayersData]=useState([...players])
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
      
        return result;
      };

    const handleDrop=(result)=>{
       setPlayersData(reorder(playersData, result.source.index, result.destination.index)) 
    }
  return (
    <div style={{display: 'flex', justifyContent: 'center', height: '100%'}}>
      <DragDropContext onDragEnd={handleDrop}>

            <Droppable droppableId={`droppable-1`} >
              {(provided, snapshot)=>{
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                      padding: 4,
                      margin: 5,
                      width: 250,
                      minHeight: 500
                    }}
                  >
                  <p>Players</p>
                    {playersData.map((player, index)=>(
                        <Draggable
                          key={player.id}
                          draggableId = {`${player.id}`}
                          index={index}
                        >
                          {(provided,snapshot)=>{
                            
                            return(
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                  userSelect: 'none',
                                  margin: '0 0 8px 0',
                                  backgroundColor: snapshot.isDragging ? '#263d4b' : '#456D86',
                                  color: 'white',
                                  ...provided.draggableProps.style
                                }}
                              >
                                <p>{index}</p>
                                <img  
                                    className='player-img' 
                                    src={`/img-players/${player.image}`} 
                                    alt={player.name}
                                />
                                <p>{player.name}</p>
                                
                              </div>
                            )
                          }}

                        </Draggable>
                      
                    ))}
                    {provided.placeholder}
                  </div>
                )
              }}
            </Droppable>
          
      </DragDropContext>

    </div>
  )
}

export default Challenge10
