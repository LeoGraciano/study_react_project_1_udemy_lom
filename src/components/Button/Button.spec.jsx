import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {

    it('should render the button with the text "Load more" elements', () => {
        render(<Button text="Load more" />);
        expect.assertions(1)
        expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument();
    });

    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn} disabled={false} />);
        expect.assertions(1)
        fireEvent.click(screen.getByRole('button', { name: /load more/i }))
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should be disabled when disabled is true', () => {
        render(<Button text="Load more" disabled={true} />);
        expect.assertions(1)
        expect(screen.getByRole('button', { name: /load more/i })).toBeDisabled()
    });

});
