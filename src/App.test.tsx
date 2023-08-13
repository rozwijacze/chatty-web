import { render, screen } from '@testing-library/react';
import App from './App';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

it('should have hello world', () => {
  render(<App />);
  const message = screen.queryByText(/Hello World/i);
  expect(message).toBeVisible();
});
