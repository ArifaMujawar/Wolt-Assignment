import React from 'react';
import {shallow} from 'enzyme';
import { render } from '@testing-library/react';
import App from '../App';

test('renders other components', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

