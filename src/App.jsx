import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick= {() => setColor("Red")} className='outline-none  px-4 py-1 rounded-full test-white shadow-sm' style={{backgroundColor: "red"}} >
              Red
            </button>
            <button onClick= {() => setColor("Green")} className='outline-none  px-4 py-1 rounded-full test-white shadow-sm' style={{backgroundColor: "green"}} >
              Green
            </button>
            <button onClick= {() => setColor("Purple")} className='outline-none  px-4 py-1 rounded-full test-white shadow-sm' style={{backgroundColor: "purple"}} >
              Purple
            </button>
            <button onClick= {() => setColor("Yellow")} className='outline-none  px-4 py-1 rounded-full test-white shadow-sm' style={{backgroundColor: "yellow"}} >
              Yellow
            </button>
            <button onClick= {() => setColor("Pink")} className='outline-none  px-4 py-1 rounded-full test-white shadow-sm' style={{backgroundColor: "pink"}} >
              Pink
            </button>
            <button onClick= {() => setColor("Aqua")} className='outline-none  px-4 py-1 rounded-full test-white shadow-sm' style={{backgroundColor: "aqua"}} >
              Aqua
            </button>
            <button onClick= {() => setColor("Blue")} className='outline-none  px-4 py-1 rounded-full test-white shadow-sm' style={{backgroundColor: "blue"}} >
              Blue
            </button>
          </div>
        </div>
      </div>
  )
}

export default App