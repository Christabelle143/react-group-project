/* eslint-disable import/extensions */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configurestore.js';
import Missions from '../components/missions';

it('Renders Rockets component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
