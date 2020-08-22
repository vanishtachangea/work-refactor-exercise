
import React from 'react';

import records from '../__mocks__/records';

class RecordClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = { records: [] };
  }
  postUser = async (url, record) => {
    if (!url)
      return;
    /*       if(!record)
          return */

    if (records) {
      await this.setState({ records });
    }
  }

  componentDidMount() {
    switch (this.props.method) {
      case 'post':
      default:
        this.postUser(this.props.url, this.props.record);
        break;
    }

  }
  render() {
    const items = this.state.records;
    const renderItems = items.map((item, index) => {
      return (
        <React.Fragment key={item.id}>
          <div>
            <p>{item.name}</p>
          </div>
          <div>
            <p>{item.email}</p>
          </div>
        </React.Fragment>
      )
    })
    return <div>{renderItems}</div>
  }
}
export default RecordClient;

