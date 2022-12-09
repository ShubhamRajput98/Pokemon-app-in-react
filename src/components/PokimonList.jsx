import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletPoki } from '../redux/Reducer'
import { store } from '../redux/Store'
export const PokimonList = () => {

    const pokimon = useSelector(store => store.pokimon)
    const dispatch = useDispatch()

    const DeletPoki = (id) => {
        dispatch(deletPoki({ id: id }))
    }

    const renderPoki = () => pokimon.map(item => (
        <div className="pokimon-card" key={item.id}>
            <div className="card">
                <div className="name">
                    <h2>{item.name}</h2>
                </div>
                <div className="breed">
                    <p><span>Power : </span>{item.power}</p>
                </div>
                <div className="dis">
                    <span>Discription</span>
                    <p>{item.dis}</p>
                </div>
            </div>
            <div className="bottom">
                <Link to={`/pokimon-edit/${item.id}`}>
                    <button className="edit">Edit</button>
                </Link>
                <button onClick={() => DeletPoki(item.id)} className="delete">Delete</button>
            </div>
        </div>
    ))


    return (
        <div className="pokimon-section">
            <div className="btn">
                <Link to={"/pokimon-app"}>
                    <button>Add Pokimaon</button>
                </Link>
            </div>
            <div className='pokimon-cards'>
                {pokimon.length ? renderPoki() : <p>Add pokemons</p>}
            </div>
        </div>
    )
}
