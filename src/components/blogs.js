import React from 'react'
import BlogCard from './blogCard'
const blogsStyle = {
  "zIndex":"2"
}
const Blogs = () => {
  const arr = [
    {
        "id": 1,
        "title": "what is heroku",
        "date": "12-2-2023",
        "desc": "Hello my name is monu dixit"
    },
    {
        "id": 2,
        "title": "Lorem ipsum dolor sit amet",
        "date": "3-5-2023",
        "desc": "Consectetur adipiscing elit"
    },
    {
        "id": 3,
        "title": "Sed do eiusmod tempor",
        "date": "7-8-2023",
        "desc": "Incididunt ut labore et dolore magna aliqua"
    },
    {
        "id": 4,
        "title": "Ut enim ad minim veniam",
        "date": "10-9-2023",
        "desc": "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
        "id": 5,
        "title": "Duis aute irure dolor in reprehenderit",
        "date": "15-10-2023",
        "desc": "In voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    },
    {
        "id": 6,
        "title": "Excepteur sint occaecat cupidatat non proident",
        "date": "20-11-2023",
        "desc": "Sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        "id": 7,
        "title": "Lorem ipsum dolor sit amet",
        "date": "25-12-2023",
        "desc": "Consectetur adipiscing elit"
    },
    {
        "id": 8,
        "title": "Sed do eiusmod tempor",
        "date": "1-1-2024",
        "desc": "Incididunt ut labore et dolore magna aliqua"
    },
    {
        "id": 9,
        "title": "Ut enim ad minim veniam",
        "date": "5-2-2024",
        "desc": "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
        "id": 10,
        "title": "Duis aute irure dolor in reprehenderit",
        "date": "10-3-2024",
        "desc": "In voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    },
    {
        "id": 11,
        "title": "Excepteur sint occaecat cupidatat non proident",
        "date": "15-4-2024",
        "desc": "Sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        "id": 12,
        "title": "Lorem ipsum dolor sit amet",
        "date": "20-5-2024",
        "desc": "Consectetur adipiscing elit"
    },
    {
        "id": 13,
        "title": "Sed do eiusmod tempor",
        "date": "25-6-2024",
        "desc": "Incididunt ut labore et dolore magna aliqua"
    },
    {
        "id": 14,
        "title": "Ut enim ad minim veniam",
        "date": "1-7-2024",
        "desc": "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }
  ]
  return (
    <>
    <div style={blogsStyle}>
    {arr.map(item => (

      <BlogCard  blog = {item} />
        
      ))}
    
    </div>
    </>

  )
}

export default Blogs
