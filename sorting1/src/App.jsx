import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from "axios"

function App() {
  const [data,setData]=useState([])
  const [btn, setBtn] =useState(false);
  //https://sandlasdata.herokuapp.com/grabinas

  const getdata=()=>{
    axios.get("https://sandlasdata.herokuapp.com/grabinas").then(res=>
      setData(res.data.grabinadata)
      //console.log(res.data.grabinadata)
    )
  }
useEffect(()=>{
  getdata()
},[])
const handleSorting=()=>{

  const newdata=[...data]

newdata.sort((a,b)=>{

  return a.price-b.price


})
setData(newdata);

if(btn === false){
  setBtn(true)
} else {
  setBtn(false)
}

console.log(data)
}
const handleSorting1=()=>{

  const newdata=[...data]
newdata.sort((a,b)=>{

  return b.price-a.price


})
setData(newdata);
if(btn === true){
  setBtn(false)
} else {
  setBtn(true)
}
}

console.log("data", data);

  return (
    <div className="App">

<button onClick={handleChange}>{}</button>

     <button onClick={handleSorting}>high</button>
      <button onClick={handleSorting1}>low</button>
      <div>{
        data.map((e, id)=>{
          return (<div key={id}>
            <div>{e.name} - {e.price} </div>
            <div><img src={e.image[0]} style={{height:"200px"}}/></div>
            <button>ADD to cart</button>

            </div>
          )
        })
        }</div>
    </div>
  )
}

export default App
