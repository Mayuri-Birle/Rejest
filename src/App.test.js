import { render, screen } from '@testing-library/react';
import App from './App';

test('Testing Form Name', ()=>{
  render(<App />);
  let text = screen.getByRole('textbox')

  expect(text).toBeInTheDocument();
  expect(text).toHaveAttribute('name', 'username');

})

test('Password Field',()=>{
  render(<App />);
  let password = screen.getByPlaceholderText('Enter password')
  expect(password).toBeInTheDocument();
  expect(password).toHaveAttribute('name', 'password');
})

test('Check Button',()=>{
  render(<App />);
  let button = screen.getByRole('button')
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute('type', 'submit');
})

