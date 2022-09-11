import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import players from '../data/players';

const Challenge11a = () => {
    const [columns, setColumns] = useState([]);
    const [playersData, setPlayersData]=useState([...players]);
    const [boxes, setBoxes]=useState({});



    useEffect(()=>{
        const teams=playersData.reduce((acc, cur)=>{
            if(!acc.includes(cur.team)){
                acc.push(cur.team)
            }
            return acc;
        },["Inactive"])
        setColumns(teams);
        setBoxes(teams.reduce((acc, cur)=>{
            if(cur==='Inactive'){
              acc[cur]=[...playersData]
            }
            else{
              acc[cur]= [];
            
            }
            return acc;
        },{}))
    },[playersData])  

    const onDragEnd = (result) =>{
        const dropFromId= result.source.droppableId;
        const dropToId=result.destination.droppableId;
        const dragId=result.draggableId;
        const dropIndex=result.destination.index;
        if(dropToId===playersData[dragId].team || dropToId==='Inactive'){
            boxes[dropToId].splice(dropIndex, 0, playersData[dragId])
            boxes[dropFromId]=boxes[dropFromId].filter(player=>player.id!==playersData[dragId].id)
            setBoxes(boxes)
        }        
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', height: '100%'}}>
        <DragDropContext onDragEnd={result=>{onDragEnd(result)}}>
     
          {columns.map((column, columnIndex)=>{
            return (
              <Droppable droppableId={`${column}`} key={columnIndex}>
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
                        <h5>{column} Team</h5>
                                                                  
                        {boxes[column].map((player, index)=>(
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
                                    justifyContent: 'space-between',
                                    userSelect: 'none',
                                    padding: '2px',
                                    margin: '0 0 2px 0',
                                    minHeight: '50px',
                                    backgroundColor:  `${player.team.toLowerCase()}` ,
                                    outline: snapshot.isDragging ? '1px solid red' : '1px solid black',
                                    borderRadius: '4px',
                                    color: 'white',
                                    ...provided.draggableProps.style
                                  }}
                                >
                                    <div>
                                        <h5>{player.name}:</h5>
                                        <p>{player.position}</p>
                                    </div>
                                    <img className="player-image" src={`/img-players/${player.image}`} alt="" />
                                  
                                </div>
                              )
                            }}
  
                          </Draggable>)
                        
                      )}
                      {provided.placeholder}
                    </div>
                  )
                }}
              </Droppable>
            )
          })}
        </DragDropContext>
        
    </div>
  )
}

export default Challenge11a;