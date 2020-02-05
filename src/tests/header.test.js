import Header from '../Header.js'
import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'

test('should render Header correctly',()=>{
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

