import PropTypes from "prop-types";

function Moviedetail({ id, coverImg, title, description, genres }) {
  return (
    <div>
      <h1>{id}</h1>
      <img src={coverImg} alt={title}></img>
      <h1>{title}</h1>
      <h1>{description}</h1>
      <h1>
        {genres.map((g) => (
          <li>{g}</li>
        ))}
      </h1>
    </div>
  );
}

Moviedetail.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Moviedetail;
