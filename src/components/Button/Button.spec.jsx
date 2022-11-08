import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {

    it('should render the button with the text "Load more" elements', () => {
        render(<Button text="Load more" />);
        expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument();
    });

    it('should call function on button click', async () => {
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn} disabled={false} />);
        await userEvent.click(screen.getByRole('button', { name: /load more/i }))
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should be disabled when disabled is true', () => {
        render(<Button text="Load more" disabled={true} />);

        expect(screen.getByRole('button', { name: /load more/i })).toBeDisabled()
    });

    it('should match snapshot', () => {

        const fn = jest.fn();
        const { container } = render(<Button text="Load more" onClick={fn} disabled={false} />);
        expect(container.firstChild).toMatchSnapshot();
    });

});
