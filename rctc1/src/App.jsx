import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [data,setData]=useState([])

  useEffect(()=>{
    GetData()
  },[])


  const GetData=()=>{


    axios.get("https://json-server-mocker-masai.herokuapp.com/candidates").then(res=>{

      setData(res.data)
      console.log(res.data)
    }


    
  )
}

  
  return (



    <div className="App">
     
       
    </div>
  )
}

export default App
