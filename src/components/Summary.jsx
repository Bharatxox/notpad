import PropTypes from "prop-types";
const Summary = ({ numWords, numChar, readTime }) => {
  return (
    <div className="mt-4 p-4  rounded-lg shadow bg-[#1a1a1a]">
      <p className="mb-1">
        <strong>Number of Words:</strong> {numWords}
      </p>
      <p className="mb-1">
        <strong>Number of Characters:</strong> {numChar}
      </p>
      <p>
        <strong>Reading Time (in minutes):</strong> {readTime}
      </p>
    </div>
  );
};
Summary.propTypes = {
  numWords: PropTypes.number,
  numChar: PropTypes.number,
  readTime: PropTypes.number,
};

export default Summary;
