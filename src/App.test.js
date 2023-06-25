import { render, screen } from '@testing-library/react';
import App from './App';

test('renders correct heading', () => {
  render(<App />);
  expect(screen.getByRole('heading').textContent).toMatch(/our first test/i);
});
