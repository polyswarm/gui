import React from 'react';
import {shallow, render, mount} from 'enzyme';
import {renderToJson, shallowToJson} from 'enzyme-to-json';
import LocalStorage from '../__mocks__/localstorage';
import App from '../App';

it('renders without crashing', () => {
  const wrapper = render(<App />);
  expect(renderToJson(wrapper)).toMatchSnapshot();
});