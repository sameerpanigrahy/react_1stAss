import './App.css';
import  React ,{useState }from 'react';
import './style.css'


export default function App() {
  
  let [text,setText]=useState('')
  let [out,setOut]=useState(false)
  console.log(text)
  return (
    <div >
      <textarea value={text} onChange={(text)=>setText(text.target.value)}></textarea>
      <br/>
      <button onClick={()=>setOut(true)}>Click Me</button>
      <br/>
      {out?<p>{text.toUpperCase()}</p>:null}
    </div>
  );
}
