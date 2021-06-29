import React, { useContext } from 'react'
import MoodContext from '../contexts/moodContext'
import bgChange from '../utils/bgChange'


function Label(props) {


const currentMood = useContext(MoodContext)

let bgColor = currentMood === "thinking" ? "yellow" : "purple"; 

let newColor = props.title === 'useContext' && bgColor ? bgColor : "white"; 

let className = ''
 if (newColor === "yellow") {
    className += 'thinking';
  }
if (newColor === "purple"){
    className += 'confident'
  }

// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//     </div>
//   );
// }



  return (
  <h1 className={'labelHeader' + ' ' + className}>This Counter was made using { props.title } {props.directions}
 </h1>
  )
}
export default Label;

