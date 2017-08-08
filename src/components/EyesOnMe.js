import React from 'react'

export default class EyesOnMe extends React.Component{
  focus = function(){
    console.log('Good!')
  }

  blur = function(){
    console.log('Hey! Eyes on me!')
  }

  render(){
    return (
      <button onFocus={this.focus} onBlur={this.blur}></button>
    )
  }
}
