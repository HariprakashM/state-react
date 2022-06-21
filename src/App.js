import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [list,setlist]=useState([]);
  const [task,settask]=useState("");
  let additem=()=>{
    setlist([...list,{name:task,strike:false,id:list.length+1}])
  }
  let done=(id)=>{
    let itemindex=list.findIndex((obj)=>obj.id==id);
    if(list[itemindex].strike===true){
    list[itemindex].strike=false;}
    else if(list[itemindex].strike===false){
    list[itemindex].strike=true;}
    setlist([...list]);
  }
  let remove=(id)=>{
    let itemindex=list.findIndex((obj)=>obj.id==id);
    list.splice(itemindex,1);
    setlist([...list])
  }
  return (
    <div className="App" >
      <input type="text" onChange={(q)=>settask(q.target.value)}/>
      <button onClick={additem}>Add</button>
      <ul>
        {list.map((e)=>{
          return <li type="1" className={e.strike?"markdone":""}>{e.name}-<button onClick={()=>done(e.id)}>Done</button>
          -<button onClick={()=>remove(e.id)}>Remove</button></li>
        })}
      </ul>
    </div>
  );
}

