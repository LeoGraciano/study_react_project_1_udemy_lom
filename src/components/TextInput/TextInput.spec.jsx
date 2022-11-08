import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';



describe('<TextInput />', () => {

  it('should have a value of searchValue', () => {
    expect.assertions(2)
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'Testando'} />);
    const input = screen.getByPlaceholderText(/type your search/i)

    expect(input).toBeInTheDocument()
    expect(input.value).toBe('Testando');

  });
  it('should call handleChange function on each key pressed', async () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} />);
    expect.assertions(2)

    const input = screen.getByPlaceholderText(/type your search/i)

    const value = "O valor";

    await userEvent.type(input, value);

    expect(input).toHaveValue(value);
    expect(fn).toBeCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} />);
    expect(container).toMatchSnapshot();
  });

  // it('should match snapshot', () => {
  //     const { container } = render(<Posts {...props} />);
  //     expect(container.firstChild).toMatchSnapshot()
  // });

});
