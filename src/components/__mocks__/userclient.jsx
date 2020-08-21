
import React from 'react';

const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' },
};


class UserClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: "", name: "" };
    }
    getUser = async (url) => {
        if (!url)
            return;
        const parts = await url.split('/users/');

        if (users[parts[1]]) {
            const userName = await users[parts[1]];
            await this.setState({ id: parts[1], name: userName });
        }
    }
    componentDidMount() {

        switch (this.props.method) {
            case 'get':
            default:
                this.getUser(this.props.url);
                break;
        }
    }
    render() {
        return <div>{this.state.name.name}</div>
    }
}
export default UserClient;

