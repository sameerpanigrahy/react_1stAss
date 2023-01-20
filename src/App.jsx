import './App.css';
import  React ,{useState }from 'react';
import './style.css'


export default function App() {
  
  let [text,setText]=useState('')
  let [out,setOut]=useState(null)
  let HandleChange1=(text)=>setText(text.target.value) 
  
  
  return (
    <div >
      <textarea value={text} onChange={HandleChange1} ></textarea>
      <br/>
      <button onClick={()=>setOut(true)} >Upper case</button>
      <button onClick={()=>setOut(false)} >Lower case</button>
      <br/>
      {out==null?<p >{text}</p>:out?<p >{text.toUpperCase()}</p>:<p >{text.toLowerCase()}</p>}
      
      <hr/>
    </div>
  );
}
