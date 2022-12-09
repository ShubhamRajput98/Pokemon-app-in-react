import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPoki, editPoki } from '../redux/Reducer';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const PokimonEdit = () => {

    const params = useParams()
    const naveget = useNavigate()
    
    const pokimon = useSelector(store => store.pokimon)
    const existingPoki = pokimon.filter((poki)=>poki.id===params.id)

    const { name, power, dis } = existingPoki[0];

    const dispatch = useDispatch()

    const [value, setValue] = useState({
        name,
        power,
        dis,
    });

    const HandelEdit = () => {


        setValue({
            name: "",
            power: "",
            dis: "",
        });

        dispatch(editPoki({
            id: params.id,
            name: value.name,
            power: value.power,
            dis: value.dis,
        }));
        naveget('/')
    }
    return (
        <div className='pokimon-data-store'>
            <div className="pokimon-data">
                <h1>Edit Pokemon</h1>
                <div className="pokimon">
                    <label htmlFor="">Pokemon Name</label>
                    <input onChange={(e) => setValue({ ...value, name: e.target.value })}
                        value={value.name} type="text" className="input-text" placeholder='Enter name' />
                </div>
                <div className="pokimon">
                    <label htmlFor="">Pokemon power</label>
                    <input onChange={(e) => setValue({ ...value, power: e.target.value })}
                        value={value.power} type="text" className="input-text" placeholder='Enter breed' />
                </div>
                <div className="pokimon">
                    <label htmlFor="">Pokemon Description</label>
                    <textarea onChange={(e) => setValue({ ...value, dis: e.target.value })}
                        value={value.dis} name="description" id="" cols="40" rows="8" placeholder='Description'></textarea>
                </div>
                <div className="btn">
                    <button onClick={HandelEdit}>Edit</button>
                </div>

            </div>
        </div>
    )
}
