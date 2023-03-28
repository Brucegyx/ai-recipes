import { FormEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import { buildReciepeReqWithIngrad, buildResponseElement} from './Requests';
import Loading from './Loading';
import './App.css'

function App() {
  const [haveResponse, setHaveResponse] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [chatResult, setChatResult] = useState("");
  const handleGetReceipe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form); 
    const ingredients = formData.get("gredients");
    if (ingredients !== null) {
      setWaiting(true);
      setHaveResponse(false);
      const reciepePrompt = buildReciepeReqWithIngrad(ingredients);
      fetch('http://localhost:8080/api/chat-completion', {
          method: form.method, 
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({prompt: reciepePrompt})
        })
        .then(res => res.json())
        .then(data => {
          setHaveResponse(true);
          setWaiting(false);
          setChatResult(data.content);
        })
        .catch(err => {
          console.log(err);
        });
    }
    
  }

  return (
    <div className="App w-full h-screen text-center p-2 md:p-10 mx-1 md:mx-30 block scroll-smooth">
        <h1 className="prompt-question text-4xl text-left md:text-6xl font-bold px-5 mx-auto my-10">What ingredients do you have ?</h1>
        <div className="container h-2/5 rounded-lg block text-center mt-5 py-10">
          <form method='post' onSubmit={handleGetReceipe}>
            <textarea className="ingredients rounded-lg w-5/6 md:w-2/3 h-3/5 md:h-1/2 block text-xl md:text-3xl bg-gray-200 py-2 px-5 focus:outline-none resize-none mx-auto my-5" 
              placeholder='Separate them with commas' name="gredients" rows={2}></textarea>
            <button type="submit" 
              className="bg-red-500 hover:bg-red-400 p-3 block w-5/6 md:w-1/6 h-auto text-xl rounded-lg text-white mx-auto mt-10">
              Get your receipe
            </button>
          </form>
          
        </div>
        {!haveResponse &&  <Loading status={waiting}/>}
        { haveResponse && 
        <div className="container h-max  rounded-lg block text-center mt-5">
          <div className="answer rounded-lg overflow-auto border-red-600 border-2 text-gray-800 text-2xl font-semibold text-left px-2 py-4 my-3 whitespace-pre-wrap">
            {chatResult }
          </div>
        </div>
        }
      
      
    </div>
  )
}

export default App
