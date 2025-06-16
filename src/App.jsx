import { useState,useRef } from 'react'
import './App.css'
import Next from './Next'

function App() {
  const [count, setCount] = useState("");
  const [name, setName] = useState([]);
  const val=useRef()
  
  
  return (
    <>
      <ul>
        {name.map((firstName) => (
          <li
            className={firstName.bough ? 'color' : ''}
            onClick={() => {
              const updated = name.map(item =>
                item.namee === firstName.namee
                  ? { ...item, bough: !item.bough }
                  : item
              );
              setName(updated);
            }}
            key={firstName.namee}
          >
            {firstName.namee}
          </li>
        ))}
      </ul>

      <Next>
        <div ref={val} onClick={()=>{console.log(val.current);
        }} className="float">harshid hadiya <b>j</b></div>
      </Next>

      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)
          
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const newItem = { namee: count, bough: false };
            setName([...name, newItem]);
            setCount("");
          }
        }}
      />
      <input type="date" onClick={(e)=>console.log(e.target.value)
      } />

      <div>{count}</div>
    </>
  )
}

export default App
