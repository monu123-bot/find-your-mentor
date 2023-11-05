import { Link } from "react-router-dom";
import MentorCard from "./mentorsCard";
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import React from 'react'
const searchStyle = {
    "width":"50%",
    "padding":"20px",
    "marginLeft":"auto",
    "marginRight":"auto",
    "position":"sticky",
    "top":"50px",
    // "position":"sticky",
    // "top":"10wh",
    "zIndex":"1"
  }

const mentorsStyle = {
    "width":"70%",
    // "padding":"20px",
    "marginLeft":"auto",
    "marginRight":"auto",
    "height":"700px",
    "overflowY":"scroll",
    "zIndex":"2",

}
const mentorsarr = [
    {
        "id":1,
        "name":"Monu Dixit",
        "designation":"SWE at mocrosoft",
        "past_experience":[
            {
                "id":1,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            },
            {
                "id":2,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            }
        ],
        "email":"monu@gmail.com",
        "phno":"8377XXXXXXX",
        "rating":3,
        "mentees":3,
        "available":[
            'Monday','Tuesday','Wednuesday','Thursday','Friday','Saturday','Sunday'
        ],
        "timings":"7:00PM-8:00PM",
        "linkedin":"linkedin.com",
        "totalSlots":5,
        "filledSlots":3

    },
    {
        "id":2,
        "name":"Monu Dixit",
        "designation":"SWE at mocrosoft",
        "past_experience":[
            {
                "id":1,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            },
            {
                "id":2,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            }
        ],
        "email":"monu@gmail.com",
        "phno":"8377XXXXXXX",
        "rating":3,
        "mentees":3,
        "available":[
            'Monday','Tuesday','Wednuesday','Thursday','Friday','Saturday','Sunday'
        ],
        "timings":"7:00PM-8:00PM",
        "linkedin":"linkedin.com",
        "totalSlots":5,
        "filledSlots":3

    },
    {
        "id":3,
        "name":"Monu Dixit",
        "designation":"SWE at mocrosoft",
        "past_experience":[
            {
                "id":1,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            },
            {
                "id":2,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            }
        ],
        "email":"monu@gmail.com",
        "phno":"8377XXXXXXX",
        "rating":3,
        "mentees":3,
        "available":[
            'Monday','Tuesday','Wednuesday','Thursday','Friday','Saturday','Sunday'
        ],
        "timings":"7:00PM-8:00PM",
        "linkedin":"linkedin.com",
        "totalSlots":5,
        "filledSlots":3

    },
    {
        "id":4,
        "name":"Monu Dixit",
        "designation":"SWE at mocrosoft",
        "past_experience":[
            {
                "id":1,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            },
            {
                "id":2,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            }
        ],
        "email":"monu@gmail.com",
        "phno":"8377XXXXXXX",
        "rating":3,
        "mentees":3,
        "available":[
            'Monday','Tuesday','Wednuesday','Thursday','Friday','Saturday','Sunday'
        ],
        "timings":"7:00PM-8:00PM",
        "linkedin":"linkedin.com",
        "totalSlots":5,
        "filledSlots":3

    },
    {
        "id":5,
        "name":"Monu Dixit",
        "past_experience":[
            {
                "id":1,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            },
            {
                "id":2,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            }
        ],
        "email":"monu@gmail.com",
        "phno":"8377XXXXXXX",
        "rating":3,
        "mentees":3,
        "available":[
            'Monday','Tuesday','Wednuesday','Thursday','Friday','Saturday','Sunday'
        ],
        "timings":"7:00PM-8:00PM",
        "linkedin":"linkedin.com",
        "totalSlots":5,
        "filledSlots":3

    },
    {
        "id":6,
        "name":"Monu Dixit",
        "designation":"SWE at mocrosoft",
        "past_experience":[
            {
                "id":1,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            },
            {
                "id":2,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            }
        ],
        "email":"monu@gmail.com",
        "phno":"8377XXXXXXX",
        "rating":3,
        "mentees":3,
        "available":[
            'Monday','Tuesday','Wednuesday','Thursday','Friday','Saturday','Sunday'
        ],
        "timings":"7:00PM-8:00PM",
        "linkedin":"linkedin.com",
        "totalSlots":5,
        "filledSlots":3

    },
    {
        "id":7,
        "name":"Monu Dixit",
        "designation":"SWE at mocrosoft",
        "past_experience":[
            {
                "id":1,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            },
            {
                "id":2,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            }
        ],
        "email":"monu@gmail.com",
        "phno":"8377XXXXXXX",
        "rating":3,
        "mentees":3,
        "available":[
            'Monday','Tuesday','Thursday','Friday','Saturday','Sunday'
        ],
        "timings":"7:00PM-8:00PM",
        "linkedin":"linkedin.com",
        "totalSlots":5,
        "filledSlots":3

    },
    {
        "id":8,
        "name":"Monu Dixit",
        "designation":"SWE at mocrosoft",
        "past_experience":[
            {
                "id":1,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            },
            {
                "id":2,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            }
        ],
        "email":"monu@gmail.com",
        "phno":"8377XXXXXXX",
        "rating":3,
        "mentees":3,
        "available":[
            'Monday','Tuesday','Wednuesday','Thursday','Friday','Saturday','Sunday'
        ],
        "timings":"7:00PM-8:00PM",
        "linkedin":"linkedin.com",
        "totalSlots":5,
        "filledSlots":3

    },
    {
        "id":9,
        "name":"Monu Dixit",
        "designation":"SWE at mocrosoft",
        "past_experience":[
            {
                "id":1,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            },
            {
                "id":2,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            }
        ],
        "email":"monu@gmail.com",
        "phno":"8377XXXXXXX",
        "rating":3,
        "mentees":3,
        "available":[
            'Monday','Tuesday','Wednuesday','Thursday','Friday','Saturday','Sunday'
        ],
        "timings":"7:00PM-8:00PM",
        "linkedin":"linkedin.com",
        "totalSlots":5,
        "filledSlots":3

    },
    {
        "id":10,
        "name":"Monu Dixit",
        "designation":"SWE at mocrosoft",
        "past_experience":[
            {
                "id":1,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            },
            {
                "id":2,
                "company":"google",
                "from":"2013",
                "till":"2017",
                "role":"SWE"
            }
        ],
        "email":"monu@gmail.com",
        "phno":"8377XXXXXXX",
        "rating":3,
        "mentees":3,
        "available":[
            'Monday','Tuesday','Wednuesday','Thursday','Friday','Saturday','Sunday'
        ],
        "timings":"7:00PM-8:00PM",
        "linkedin":"linkedin.com",
        "totalSlots":5,
        "filledSlots":3

    }
    
]
const mentors = () => {
  return (
    <>
<div style={searchStyle} >
    <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
    </div>
     <div style={mentorsStyle} className='scrollBar'  >

        
    {mentorsarr.map(item => (
      
      <MentorCard  mentor = {item} />
    
      ))}
    
    </div>
    
    </>
    
  )
}

export default mentors