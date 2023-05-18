import React, { useState } from 'react'
import './Main.css'
import { Tweet } from './Tweet'

export const Tweets = () => {
    let [number, setNumber] = useState(0)
    let handleNumber =() => {
        
        setNumber(number + 1)
       
        console.log(number)

    }
//fhwqrjg;
  return (
    
        <div className="Main">
            Total Likes: {number} 
           
        <Tweet message="It's payday!!!" color="green" onClicked={ handleNumber }/>
        <Tweet message="I just bought a new car!" color="yellow"onClicked={ handleNumber } />
    <Tweet message="I just smashed my new car." color="red"onClicked={ handleNumber } />
    
</div>
   
  )
}