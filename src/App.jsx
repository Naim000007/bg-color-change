
import { useState } from 'react'
import './App.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [color, setColor] = useState('olive')

  return (
      <div className="min-w-full min-h-screen duration-200 container"
      style={{background: color}}>
       <div>
       <div className='flex flex-warp justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
       <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background : "black"}}>Black</button>
       <button onClick={()=>{setColor("green")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background : "green"}}>Green</button>
       <button onClick={()=>{
        setColor("pink")
       }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background : "pink"}}>Pink</button>
       <button onClick={()=>setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{background : "white"}}>Yellow</button>
       <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background : "blue"}}>Blue</button>
       </div>
       </div>
      </div>
  )
}

export default App
