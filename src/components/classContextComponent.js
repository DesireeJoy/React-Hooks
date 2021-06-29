import React, { Component } from 'react'
import  MoodContext from '../contexts/moodContext'

export default class ClassContextComponent extends Component {

 moodStyle(mood) {
     return {
     backgroundColor: mood ==='thinking' ? '#333' : '#ccc',
   
    color: mood ==='thinking' ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem',
    width: 500,
    height: 80,
    border: '3px solid black'
     }
 }

render(){
    return (
    <MoodContext.Consumer> 
     {moodTheme => {
        return <div style={this.moodStyle(moodTheme)}>
This boxes properties are dependent on variables passed in moodContext. It is created inside of a class compmonent.
    </div>
    }}
    </MoodContext.Consumer>
)
}
}