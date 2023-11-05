import React from 'react'
import { MDBCardText } from 'mdb-react-ui-kit';
import Showavaildays from './showavaildays';

const MentorAvailability = ({ props }) => {
    
    let availableDays = new Array()
    
    let day = {

        1:'Monday',
        2:'Tuesday',
        3:'Wednuesday',
        4:'Thursday',
        5:'Friday',
        6:'Saturday',
        7:'Sunday'

    }
    
    for (let key in props){
        
        if (props[key]===true){
        
            availableDays.push(day[key])
        
        }
    }

    return ( 
    <>
    <ul>

    {

        
        props.map(item=>{
            return (
              <li>{item}</li>)
        })
    }
    
</ul>
    </>
  )
}

export default MentorAvailability


