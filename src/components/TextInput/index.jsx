import P from 'prop-types';

import './styles.sass';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type your search"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.PropTypes.string.isRequired,
  handleChange: P.PropTypes.func.isRequired,
};
