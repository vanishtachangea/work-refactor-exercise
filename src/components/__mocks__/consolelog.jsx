import React,{Component} from 'react';
export default class ConsoleLog extends Component {
    render() {
      console.log(this.props.obj)
      return ( 
        <div>Console Log component </div>
      )
    }
  }