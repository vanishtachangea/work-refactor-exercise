import React from 'react'
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Work from '../../components/work';

describe('Refactored Version of Work', () => {
    let component;
    it('should return result from userClient.get, when type is passed', () => {
        const component = renderer.create(
            <Work type="user" id="4" />,
        );
        let tree = component.toJSON();
        console.log(tree);
        expect(tree).toMatchSnapshot();
    })
    it('should return result from recordClient.post. when type is record', () => {
        const component = renderer.create(
            <Work type="record" />, 
        );
        let tree = component.toJSON();
        console.log(tree);
        expect(tree).toMatchSnapshot();
    })
    it('should return log when type is log and allowWrite is true', () => {
        const component = renderer.create(
            <Work type="log" allowWrite/>,
        );
        let tree = component.toJSON();
        console.log(tree);
        expect(tree).toMatchSnapshot();
    })
    it('should return log when type is log and allowWrite is false', () => {
        const component = renderer.create(
            <Work type="log" allowWrite={false}/>,
        );
        let tree = component.toJSON();
        console.log(tree);
        expect(tree).toMatchSnapshot();
    })
    it('should return mark if user is selected', () => {
        const component = renderer.create(
            <Work type="user" allowWrite={false}/>,
        );
        let tree = component.toJSON();
        console.log(tree);
        expect(tree).toMatchSnapshot();
    })
})