
import React, { useState, useEffect, useRef, useReducer} from 'react'
import './App.css'
import Label from './components/label'
import MoodContext from './contexts/moodContext'
import ClassContextComponent from './components/classContextComponent'

function App() {

 {/* useState allows you to access stored state variables and set them with the setVariabl 
option */}

  const [count, setCount] = useState(0);
  const [fxCount, setfxCount] = useState(0);
  const [mood, setMood] = useState('thinking');
  const immutableNum = useRef(5);
  const domBtn = useRef(null)
  

function reducer(state, action){
switch(action.type){
  case 'increment':
    return state + 1;
  case 'decrement':
    return state - 1;
  default:
    throw new Error();
}
}

const [reduce, dispatch] = useReducer(reducer, 50);

   useEffect(
     () => { setfxCount(fxCount + 1)}, [count]
    )
 {/* useEffect allows you to changed stored state variables when a dependency is rendered. Dependecies are indicated
by the content inside of the array brackets in the second position */}
  return(
    
    <div className='centerDiv'> 
     <div className='childDiv'> 
    <Label
    title={'useState'}
    />
    </div>


    <div className='childDiv'> 
    <button onClick={() => setCount(count + 1)}>
    {count}
    </button>
    </div>
   
  <Label
    title={'useEffect'}
    directions={'It is a side effect of the first counter'}
    />
    
    {fxCount}  

    {/* context hook used to provide information to a coponent 
     without prop drilling. Should be used when there are large chains
      of props to drill through, not for two or three componenbts */}
      <MoodContext.Provider value={mood}> 
     <Label
    title={'useContext'}
    directions={'Functional Context Component changes text color based on mood'}
    />  
   

    <div className='childDivMood'>
      <button onClick={() => setMood('thinking')}>🤔</button>
      <button onClick={() => setMood('confident')}>😎</button>
    </div>
    <div> 
     
   <ClassContextComponent value={mood} />
   </div>
    </MoodContext.Provider>
    {/* Use Ref can be used to change objects without triggering a re-render*/}
      <Label title={'useRef'}
    directions={'Using ref to change data without rerendering'} />
      <button onClick={() => immutableNum.current++ }>
        {immutableNum.current}
      </button>

    <Label title={'useRef'}
    directions={'Using ref to select pieces of the dom'} />
    <button ref={domBtn} onClick={()=> {domBtn.current.style.backgroundColor = "grey";}}>Referenced Button</button>
    <button onClick={() => {
      domBtn.current.style.backgroundColor = "yellow";
    }}>Use this button to click the other button</button>
  
  {/* useReducer sets state using a redux pattern. It sends out a dispatch that goes to a function that decides
  how to change the state */}
  <Label title={'useReducer'}
    directions={'Using reducer to change a state var'} />
  <h1 style={{backgroundColor:'green', padding:20, borderRadius:50}}> Score: {reduce} </h1>
  <div> <button onClick={() => dispatch({type: 'increment'})}>+</button>
  <button onClick={() => dispatch({type: 'decrement'})}>-</button>
   </div></div>
  )

}

export default App;
