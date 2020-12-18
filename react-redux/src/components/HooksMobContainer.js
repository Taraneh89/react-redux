import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {buyMob} from '../Redux';


const HooksMobContainer=()=> {
    const numberOfMobliles = useSelector(state=>state.numOfMobs);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>number of mobsles:{numberOfMobliles}</h2>
            <button onClick={()=>dispatch(buyMob())}>Buy Mobile</button>
        </div>
    )
}

export default HooksMobContainer;
