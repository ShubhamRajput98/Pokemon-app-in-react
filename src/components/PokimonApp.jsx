import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPoki } from '../redux/Reducer';
import {v4 as uuidv4} from 'uuid';
import { Link } from 'react-router-dom';

export const PokimonApp = () => {

  
  const dispatch = useDispatch()
  
  const [value,setValue]=useState({
    name:"",
    power:"",
    dis:"",
  });

  const HandelAdd = ()=>{

    if(value.name==""||value.breed==""||value.dis==""){
      return alert("All input fields are required")
    }
    
    setValue({name:"",
    power:"",
    dis:"",});

    dispatch(addPoki({
      id: uuidv4(),
      name:value.name,
      power:value.power,
      dis:value.dis,
    }));
  }
  return (
    <div className='pokimon-data-store'>
      
      <div className="pokimon-data">
        <h1>
          Add Pokemon
        </h1>
       <form action="">
       <div className="pokimon">
          <label htmlFor="">Pokemon Name</label>
          <input onChange={(e)=>setValue({...value,name:e.target.value})}
          required value={value.name} type="text" className="input-text" placeholder='Enter name' />
        </div>
        <div className="pokimon">
          <label htmlFor="">Pokemon power</label>
          <input onChange={(e)=>setValue({...value,power:e.target.value})}
          required value={value.power} type="text" className="input-text" placeholder='Enter breed' />
        </div>
        <div className="pokimon">
          <label htmlFor="">Pokemon Description</label>
          <textarea onChange={(e)=>setValue({...value,dis:e.target.value})}
          required value={value.dis} name="description" id="" cols="40" rows="8" placeholder='Description'></textarea>
        </div>
        <div className="btn">
          <Link to={(value.name==""||value.breed==""||value.dis=="")?"":"/"}>
          <button onClick={HandelAdd}>Add</button>
          </Link>
        </div>
       </form>

      </div>
    </div>
  )
}
