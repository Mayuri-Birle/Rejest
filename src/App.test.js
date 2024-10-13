import { render, screen } from '@testing-library/react';
import App from './App';

test('Test Form Name', ()=>{
  render(<App />);
  let text = screen.getByRole('textbox')

  expect(text).toBeInTheDocument();
  expect(text).toHaveAttribute('name', 'username');

})

test('Test Password Field',()=>{
  let password = screen.getByRole('password')
  expect(password).toBeInTheDocument();
  expect(password).toHaveAttribute('name', 'password');
})