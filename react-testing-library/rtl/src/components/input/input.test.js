import Input from './input';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Input component', () => {
  it('should be rendered', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('fire change event', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: { value: 'Javascript' },
    });
  });

  it('user event', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    screen.debug();

    userEvent.type(input, 'Js');

    screen.debug();
  });
});
