
import React from 'react';

const records = [

  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
]

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

