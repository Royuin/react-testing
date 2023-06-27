import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  test('renders magnificent monkeys', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test('renders radical rhinos after button click', async () => {
    const user = userEvent.setup();

    render(<App />);

    const button = screen.getByRole('button', {name: 'Click Me'});


    await user.click(button);
    expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i);
  });

});

