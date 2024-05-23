import { useReducer } from "react";

import TextNote from "./components/TextNote";
import UtilityBtn from "./components/UtilityBtn";
import Summary from "./components/Summary";

const initialState = {
  text: "",
  numWords: 0,
  numChar: 0,
  readTime: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.payload,
        numWords: action.payload.split(/\s+/).filter((word) => word.length > 0)
          .length,
        numChar: action.payload.replace(/\s/g, "").length,
        readTime: (
          action.payload.split(/\s+/).filter((word) => word.length > 0).length /
          200
        ).toFixed(2),
      };

    case "UPPER_CASE":
      return {
        ...state,
        text: state.text.toUpperCase(),
      };
    case "LOWER_CASE":
      return {
        ...state,
        text: state.text.toLowerCase(),
      };
    case "CLEAR_TEXT":
      return {
        ...state,
        text: "",
        numWords: 0,
        numChar: 0,
        readTime: 0,
      };
    case "COPY_TEXT":
      navigator.clipboard.writeText(state.text);
      return state;
    case "REMOVE_EXTRA_SPACE":
      return {
        ...state,
        text: state.text.replace(/\s+/g, ""),
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="p-6 min-h-screen flex flex-col items-center w-screen mx-auto my-auto">
        <TextNote text={state.text} dispatch={dispatch} />
        <UtilityBtn text={state.text} dispatch={dispatch} />
        <Summary
          numWords={state.numWords}
          numChar={state.numChar}
          readTime={state.readTime}
        />
      </div>
    </>
  );
}

export default App;
