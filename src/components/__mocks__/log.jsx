
import React from 'react';
import LocalStorage from '../__mocks__/localstorage';
import RemoteStorage from '../__mocks__/remotestorage';
import ConsoleLog from '../__mocks__/consolelog';
class Log extends React.Component {
    render() {
        if (this.props.allowWrite) {
            return (
                <div>
                    <div><LocalStorage obj={this.props.obj} /></div>
                    <div><RemoteStorage obj={this.props.obj} /></div>
                </div>
            )
        }
        else
            return (<div><ConsoleLog obj={this.props.obj} /></div>)
    }
}
export default Log;

