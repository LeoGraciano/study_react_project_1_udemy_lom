import P from 'prop-types';
import './styles.sass';

export const PostCard = ({ title, cover, body }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: P.PropTypes.string.isRequired,
  cover: P.PropTypes.string.isRequired,
  body: P.PropTypes.string.isRequired,
};
