import React from 'react'
import { incrementLike,decrementLike } from './Actions'
import {createStore} from 'redux'
import Reducer from './Reducer'

const store = createStore(Reducer)
export const LikeCounter = () => {
    const [likes,setLikes] = React.useState(store.getState().likes)
    function handleLike(){
        store.dispatch(incrementLike())
    }
    function handleUnlike(){
        store.dispatch(decrementLike())
    }
    React.useEffect(()=>{
        const subscribe = store.subscribe(()=>setLikes(store.getState().likes))
    },[])
  return (
    <div>
    <h1>{likes}</h1>
        <button onClick={handleLike}>Like</button>
        <button onClick={handleUnlike} >Unlike</button>
    </div>
  )
}
