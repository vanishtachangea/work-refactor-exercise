import React from 'react';

import UserClient from '../components/__mocks__/userclient';
import RecordClient from '../components/__mocks__/recordclient';
import Log from '../components/__mocks__/log';

class Work extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      type: "",
      allowWrite: false,
      id: "",
      record: {},
      obj: {}
    }
    
  }

  componentDidMount() {
    if(this.props.obj)
    console.log("in mount" + this.props.obj.value)
    this.setState({ type: this.props.type })
    this.setState({ allowWrite: this.props.allowWrite })
    this.setState({ id: this.props.id })
    this.setState({ record: this.props.record })
    this.setState({ obj: this.props.obj })
  }

  render() {

    switch (this.state.type) {
      case 'user':
        const url = '/users/' + this.state.id;
        return <div><UserClient url={url} method='get' /> </div>
      case 'record':
        const postUrl = '/url/to/another/service/records'
        return (<div><RecordClient url={postUrl} record={this.state.record} method='post' /></div>)
      case 'log':
        return(<div><Log obj={this.state.obj} allowWrite={this.state.allowWrite} /></div>)
      default:      
        const { obj } = this.state;
        if (obj)
          console.log( {obj });
        else
          console.log({ error: "No Matching Type" })
        return (<div></div>)
    }
  }



}
export default Work;