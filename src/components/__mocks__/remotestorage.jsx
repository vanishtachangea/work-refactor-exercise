
import React from 'react';
import ReactDOM from 'react-dom';

class remotestorage extends React.Component {
    constructor(props) {
        super(props);
        this.setState({ data: "some data" });
    }
    read = () => {
        return this.state.data;
    }
    write = (url) => {
        this.setState({ data: url });
        return this.state.data;
    }
}
export default remotestorage;
