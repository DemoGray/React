import {useState} from "react"
import './App.css';

function App() {

  const [selection , setSelection] = useState(null)

  const toggle = (e) => {
    if(selection === e){
      setSelection(null)
    }else{
      setSelection(e)
    }
  }
   
  return (
  <div className="app">
    {data.map((item , index) =>{
      return <div key={index}>
          <button onClick={() => toggle(index)} className="btn"> {item.question} </button>
          <p className={selection === index?"text show":"text"}>{item.answer}</p>
      </div>
    })}

  </div>
  );
}

export default App;


const data = [
  {
    question: "Question 1",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam eaque itaque quaerat voluptate animi dolorum quisquam odit inventore, aut aspernatur quos eos numquam beatae assumenda id iusto suscipit at nesciunt unde nulla totam. Totam quidem veritatis repellendus odit ullam quos nesciunt maxime sequi, quas odio nostrum, quia impedit sit aspernatur?"
  },

  {
    question: "Question 2",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam eaque itaque quaerat voluptate animi dolorum quisquam odit inventore, aut aspernatur quos eos numquam beatae assumenda id iusto suscipit at nesciunt unde nulla totam. Totam quidem veritatis repellendus odit ullam quos nesciunt maxime sequi, quas odio nostrum, quia impedit sit aspernatur?"
  },

  {
    question: "Question 3",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam eaque itaque quaerat voluptate animi dolorum quisquam odit inventore, aut aspernatur quos eos numquam beatae assumenda id iusto suscipit at nesciunt unde nulla totam. Totam quidem veritatis repellendus odit ullam quos nesciunt maxime sequi, quas odio nostrum, quia impedit sit aspernatur?"
  },

  {
    question: "Question 4",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam eaque itaque quaerat voluptate animi dolorum quisquam odit inventore, aut aspernatur quos eos numquam beatae assumenda id iusto suscipit at nesciunt unde nulla totam. Totam quidem veritatis repellendus odit ullam quos nesciunt maxime sequi, quas odio nostrum, quia impedit sit aspernatur?"
  }
]