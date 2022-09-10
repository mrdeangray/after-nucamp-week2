import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import players from '../data/players';

const Challenge11a = () => {
    const [columns, setColumns] = useState([]);
    const [playersData, setPlayersData]=useState([...players]);
    const [inactive, setInactive]=useState([...players]);
    const [active, setActive]=useState({});



    useEffect(()=>{
        const teams=playersData.reduce((acc, cur)=>{
            if(!acc.includes(cur.team)){
                acc.push(cur.team)
            }
            return acc;
        },[])
        setColumns(teams);
        setActive(teams.reduce((acc, cur)=>{
            acc[cur]= [];
            return acc;
        },{}))
    },[playersData])  

    const onDragEnd = (result) =>{
        const dropFromId= result.source.droppableId;
        const dropToId=result.destination.droppableId;
        const dragId=result.draggableId;
        const dropIndex=result.destination.index;
        if(dropFromId==='Inactive'){
            if(dropToId===playersData[result.draggableId].team){
                active[dropToId].splice(dropIndex, 0, playersData[dragId])
               
                setActive(active)
                setInactive(inactive.filter(player=>player.id!==playersData[dragId].id))
                
            }
            else{
            }
        }
        else if(dropToId==='Inactive'){
                inactive.splice(dropIndex, 0, playersData[dragId]);
                //inactive.push(playersData[dragId]);        
                
                setInactive(inactive);
                active[dropFromId]=active[dropFromId].filter(player=>player!==playersData[dragId]);
                
        }
        if(dropToId===dropFromId){
                active[dropToId]=active[dropToId].filter(player=>player!==playersData[dragId])
                active[dropToId].splice(dropIndex, 0, playersData[dragId])
                setActive(active)
        }
            
            
        
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', height: '100%'}}>
        <DragDropContext onDragEnd={result=>{onDragEnd(result)}}>
        <Droppable droppableId={'Inactive'}>
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
                        <h5>Inactive</h5>                                          
                        {inactive.map((player, index)=>(
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
                                    margin: '0 0 3px 0',
                                    minHeight: '50px',
                                    backgroundColor:  `${player.team.toLowerCase()}` ,
                                    outline: snapshot.isDragging ? '1px solid red' : '1px solid black',
                                    borderRadius: '4px',
                                    color: 'white',
                                    ...provided.draggableProps.style
                                  }}
                                >
                                   <div>
                                        <h5>{player.name}: </h5>
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
                                                                  
                        {active[column].map((player, index)=>(
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

/*
import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import taskList from '../data/taskList'


const Tasks = () => {
  const [columns, setColumns] = useState([])
  const [tasks, setTasks] =  useState(JSON.parse(localStorage.getItem('tasks'))||[...taskList])
  
  useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks)) 
  }, [tasks])

  useEffect(()=>{
    setColumns([
        {text: 'Task', completed: false, inProgress: false}, 
        {text: 'In Progress', completed: false, inProgress: true}, 
        {text: 'Completed', completed: true, inProgress: false}
    ])
  },[])  
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };
  
  const onDragEnd = (result) =>{
    if(result.destination.droppableId==='0'){
      tasks[result.draggableId].inProgress=false;
      tasks[result.draggableId].completed=false;
    }
    if(result.destination.droppableId==='1'){
      tasks[result.draggableId].inProgress=true;
      tasks[result.draggableId].completed=false;
    }
    
    if(result.destination.droppableId==='2'){
      tasks[result.draggableId].inProgress=false;
      tasks[result.draggableId].completed=true;
    }
    // setTasks(tasks)
    console.log(result)
    
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', height: '100%'}}>
      <DragDropContext onDragEnd={result=>{onDragEnd(result)}}>
        {columns.map((column, columnIndex)=>{
          return (
            <Droppable droppableId={`${columnIndex}`} key={columnIndex}>
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
                  {column.text}
                    {tasks.map((task, index)=>(
                      column.completed===task.completed && column.inProgress===task.inProgress 
                        ?(
                        <Draggable
                          key={task.id}
                          draggableId = {`${task.id}`}
                          index={index}
                        >
                          {(provided,snapshot)=>{
                            
                            return(
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  userSelect: 'none',
                                  padding: 16,
                                  margin: '0 0 8px 0',
                                  minHeight: '50px',
                                  backgroundColor: snapshot.isDragging ? '#263d4b' : '#456D86',
                                  color: 'white',
                                  ...provided.draggableProps.style
                                }}
                              >
                                 <p>{task.task}</p>
                                
                              </div>
                            )
                          }}

                        </Draggable>)
                      :(<></>)
                    ))}
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

export default Tasks

*/