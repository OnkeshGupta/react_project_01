import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0
      px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white cursor-pointer bg-[#1a1a1a] hover:bg-red-500">
            Red</button>
          <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white cursor-pointer bg-[#1a1a1a] hover:bg-green-700">
            Green</button>
          <button 
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white cursor-pointer bg-[#1a1a1a] hover:bg-orange-500">
            Orange</button>
          <button 
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white cursor-pointer bg-[#1a1a1a] hover:bg-blue-700">
            Blue</button>
          <button 
          onClick={() => setColor("hotpink")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white cursor-pointer bg-[#1a1a1a] hover:bg-pink-500">
            Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
