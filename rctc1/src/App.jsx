import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'




 
  

 



function App() {
  const [data,setData]=useState([])
  const [btn, setBtn] = useState(false);
  useEffect(()=>{
    GetData()
  },[])
  const handleOrder=()=>{
    const data_new = [...data];
    if(btn === false){
      data_new.sort(function(a, b){
        return a.salary-b.salary;
      })
      setBtn(true);
    } else if(btn === true){
      data_new.sort(function(a, b){
        return b.salary-a.salary;
      })
      setBtn(false);
    } 
    setData(data_new);
    }

  const GetData=()=>{


    axios.get("https://json-server-mocker-masai.herokuapp.com/candidates").then(res=>{

      setData(res.data)
      console.log(res.data)
    }


    
  )
}

  
  return (



    <div className="App">
     <div style={{marginBottom:"40px"}}>
{data.map((el,id)=>{
  return(
    <div key={id}>
<div>{el.name}</div>
<div>{el.salary}</div>
    </div>
  )
})}
     </div>


    <button onClick={handleOrder}>{btn===false? "Accending" : "Decending"}</button>
    </div>
  )
}

export default App
