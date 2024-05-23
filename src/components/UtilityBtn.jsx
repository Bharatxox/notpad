import PropTypes from "prop-types";

const UtilityBtn = ({ text, dispatch }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <button onClick={() => dispatch({ type: "UPPER_CASE" })} disabled={!text}>
        UPPER CASE
      </button>
      <button onClick={() => dispatch({ type: "LOWER_CASE" })} disabled={!text}>
        LOWER CASE
      </button>
      <button onClick={() => dispatch({ type: "CLEAR_TEXT" })} disabled={!text}>
        CLEAR
      </button>
      <button onClick={() => dispatch({ type: "COPY_TEXT" })} disabled={!text}>
        COPY
      </button>
      <button
        onClick={() => dispatch({ type: "REMOVE_EXTRA_SPACE" })}
        disabled={!text}
      >
        REMOVE EXTRA SPACING
      </button>
    </div>
  );
};
UtilityBtn.propTypes = {
  text: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default UtilityBtn;
