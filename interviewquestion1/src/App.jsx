import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App(){
  const [data, setData] = useState([]);
  const [btn, setBtn] = useState(false);
 

  const getData = ()=> {
    try{
      axios.get("https://sharan-app-project.herokuapp.com/combi")
      .then(res => setData(res.data.combi));

    }
    catch(err) {
      console.log("err", err);
    }
  }

 

  useEffect(()=> {
    getData();
    
  }, [])

  const sortData = () => {
    const data_new = [...data];

    if(btn === false){
      data_new.sort(function(a, b){
        return a.brand.localeCompare(b.brand);
      })
      setBtn(true);
    } else if(btn === true){
      data_new.sort(function(a, b){
        return b.brand.localeCompare(a.brand);
      })
      setBtn(false);
    } else {
      getData();
    }
   
    

    setData(data_new);

    
  }
 

  

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={sortData}>{ btn===false? "A-Z" : "Z-A"}</button>
      <div>
        {
          data.map((el, id) => {
            return(
              <ul key={id}>
                <li>
                  {el.brand}
                </li>
              </ul>
            )
          })
        }
      </div>
    </div>
  );
}
