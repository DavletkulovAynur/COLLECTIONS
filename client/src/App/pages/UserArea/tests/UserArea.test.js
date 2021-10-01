import React from 'react'
import {render, screen} from '@testing-library/react'
import UserAreaTemplate from '../UserAreaTemplate'

test('renders learn react link', () => {
  render(<UserAreaTemplate />)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
})