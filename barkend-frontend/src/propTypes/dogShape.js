import PropTypes from 'prop-types';

export const dogShape = PropTypes.shape({
  dogid: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  breeds: PropTypes.string.isRequired,
  colors: PropTypes.string,
  age: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired
});