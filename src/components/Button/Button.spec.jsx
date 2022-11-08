import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  it('should render the button with the text "Load more" elements', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);
    expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument();
  });

  it('should call function on button click', async () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);
    await userEvent.click(screen.getByRole('button', { name: /load more/i }));
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} disabled={true} />);

    expect(screen.getByRole('button', { name: /load more/i })).toBeDisabled();
  });

  it('should be disabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    expect(screen.getByRole('button', { name: /load more/i })).not.toBeDisabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" onClick={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
