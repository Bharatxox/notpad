import PropTypes from "prop-types";

const TextNote = ({ text, dispatch }) => {
  const handleChange = (e) => {
    dispatch({ type: "SET_TEXT", payload: e.target.value });
  };

  return (
    <div className="p-4 rounded-md shadow-sm flex flex-col gap-5">
      <h1 className="font-bold text-center">Text Area</h1>
      <textarea
        rows={10}
        cols={40}
        placeholder="Input"
        value={text}
        onChange={handleChange}
        className="w-full pl-3 pt-3 border-2 border-[#646cff] rounded"
      />
    </div>
  );
};
TextNote.propTypes = {
  text: PropTypes.string,
  dispatch: PropTypes.func,
};

export default TextNote;
