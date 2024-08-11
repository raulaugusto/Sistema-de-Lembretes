import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Header component', async () => {
  render(<App />);
  const headerElement = await screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});

test('renders Form component', async () => {
  render(<App />);
  const formElement = await screen.getByTestId('form');
  expect(formElement).toBeInTheDocument();
});

test('renders ReminderList component with heading', async () => {
  render(<App />);
  const headingElement = await screen.getByText(/lista de lembretes/i);
  expect(headingElement).toBeInTheDocument();
});
