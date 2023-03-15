import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { buildReciepeReqWithIngrad, buildResponseElement} from './Requests';
import './App.css'

function App() {
  const [getResponse, setGetResponse] = useState(false);
  const [chatResult, setChatResult] = useState("");
  const handleGetReceipe = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const ingredients = formData.get("gredients");
    if (ingredients !== null) {
      const reciepePrompt = buildReciepeReqWithIngrad(ingredients);
      fetch('http://localhost:8080/api/generatereciepe', {
          method: form.method, 
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({prompt: reciepePrompt})
        })
        .then(async response => {setChatResult(await buildResponseElement(response))})
        .catch(err => console.log(err));
    }
    
  }

  return (
    <div className="App w-full bg-white rounded-lg text-center p-1 md:p-10 mx-1 md:mx-30 h-full overflow-auto scroll-smooth">
      
      <h1 className="prompt-question text-4xl text-left md:text-6xl font-bold px-5 mx-auto my-10">What ingredients do you have ?</h1>
      <div className="container h-4/5 block text-center mt-5">
        <form method='post' onSubmit={handleGetReceipe}>
          <textarea className="ingredients rounded-lg w-5/6 md:w-2/3 h-3/5 md:h-1/2 block text-xl md:text-3xl bg-gray-200 py-2 px-5 focus:outline-none resize-none mx-auto my-5" 
            placeholder='Separate them with commas' name="gredients" rows={2}></textarea>
          <button type="submit" 
            className="bg-red-500 hover:bg-red-400 p-3 block w-5/6 md:w-1/6 h-auto text-xl rounded-lg text-white mx-auto mt-10">
            Get your receipe
          </button>
        </form>
      <div className="answer h-4/5 my-10 bg-gray-500 overflow-auto text-xl text-left px-2 py-4 whitespace-pre-wrap">
        
        {/* TODO: Insert componenet for server resposne*/
          chatResult
        }
      </div>
      </div>
      
    </div>
  )
}

export default App
