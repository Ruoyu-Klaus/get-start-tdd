/*
 * @Author: Ruoyu
 * @FilePath: /get-start-tdd/jest_react/src/Components/Button/Button.test.js
 */
import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it('Button with default placeholder', () => {
  // const component = renderer.create(<Button>Button </Button>);
  // let tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  render(<Button />);
  const btnElement = screen.getByText(/button/i);
  expect(btnElement).toBeInTheDocument();
});
