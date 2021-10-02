/*
 * @Author: Ruoyu
 * @FilePath: /cicd-github-actions/client/src/Components/Button/Button.test.js
 */
import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

it('Button with default placeholder', () => {
  const component = renderer.create(<Button>aa</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
