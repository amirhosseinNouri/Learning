import { render, screen } from '@testing-library/react';
import Button from './button';

describe('Button component', () => {
  it('render button', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
