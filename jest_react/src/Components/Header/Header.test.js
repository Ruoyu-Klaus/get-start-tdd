/*
 * @Author: Ruoyu
 * @FilePath: \get-start-tdd\jest_react\src\Components\Header\Header.test.js
 */
import React from 'react';
import Header from './Header';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it('Button with default placeholder', () => {
  render(<Header title='header' />);
  const btnElement = screen.getByText(/header/i);
  expect(btnElement).toBeInTheDocument();
});
