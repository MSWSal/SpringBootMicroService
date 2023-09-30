import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Test = () => {

    useEffect(()=>{
        axios.get("http://localhost:8222/api/v1/schools")
        .then(res =>{
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })
        

    },[])

  return (
    <div>Testing</div>
  )
}

export default Test