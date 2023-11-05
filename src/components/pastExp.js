import React from 'react'
import {  MDBCardText } from 'mdb-react-ui-kit';
const PastExp = ({props}) => {
  return (
    <div>


{props.map(element => (
    <>
               <h6> <b>{element.company}</b> </h6>
                   
                        <MDBCardText className="font-italic mb-1">Duration : {element.from} - {element.till}</MDBCardText>
                        <MDBCardText className="font-italic mb-1">Role : {element.role}</MDBCardText>

                      </>

))}

                    
                    
    </div>
  )
}

export default PastExp
