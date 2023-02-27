import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [getResponse, setGetResponse] = useState(false)

  return (
    <div className="App w-100 text-center mx-auto h-100">
      
      <h1 className="prompt-question text-4xl my-10">What ingredients do you have ?</h1>
      <div className="flex text-center">
        <textarea className="ingredients border-4 border-solid border-black w-80 text-24 h-5 bg-white resize-none mx-2" 
          placeholder='Separate them with spaces' rows={2}></textarea>
        <button type="submit" className="bg-red-500 hover:bg-red-400 p-3 text-white">Ask AI</button>
      </div>
      <div className="answer">
       
        {/* TODO: Insert componenet for server resposne*/}
      </div>
      
    </div>
  )
}

export default App
