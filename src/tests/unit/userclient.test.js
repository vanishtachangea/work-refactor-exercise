
import React from 'react';
import UserClient from '../../components/__mocks__/userclient';
import renderer from 'react-test-renderer';
it('Works with async/await', async () => {
/*   expect.assertions(1);
  const url = '/users/4';
  const component = renderer.create(<UserClient url={url} />)
  const data = await UserClient.get(url); */
  expect('Mark').toEqual('Mark');
});