import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/yogit4554')
        .then(response=>response.json())
        .then(data =>{
            console.log(data)
            setData(data);
        })
    },[])
  return (
    <div className='bg-gray-700 text-3xl text-center text-neutral-50 p-4'>
        Github followers : {data.following }</div>
  )
}

export default Github