import { useState } from 'react'
function App() {
  const [color,setcolor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button onClick={() => setcolor("red")} className="outilie-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setcolor("blue")} className="outilie-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={() => setcolor("green")} className="outilie-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={() => setcolor("violet")} className="outilie-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"violet"}}>Violet</button>
          <button onClick={() => setcolor("lightpink")} className="outilie-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"lightpink"}}>Light Pink</button>
          <button onClick={() => setcolor("black")} className="outilie-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"black"}}>Black</button>
        </div>
        </div>
     </div>
    </>
  )
}

export default App
