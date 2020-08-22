
import React from 'react';

class RemoteStorage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: [] };
  }
  Write = async () => {
      await this.setState({ status:"done" });
  }

  componentDidMount() {
        this.Write();
  }
  render() {
    return (<div>Obj Saved in Remote DB</div>)
  }
}
export default RemoteStorage;

