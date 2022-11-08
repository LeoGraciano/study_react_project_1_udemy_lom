import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock

describe('<PostCard />', () => {

  it('should render PostCard correctly', () => {
    expect.assertions(4)
    // const { debug } = render(<PostCard {...props} />);
    // debug();
    render(<PostCard {...props} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', props.cover);
    expect(screen.getByAltText(props.title)).toHaveAttribute('alt', props.title);
    expect(screen.getByRole('heading', props.title)).toBeInTheDocument();
    expect(screen.getByText(props.body)).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot()
  });
});
