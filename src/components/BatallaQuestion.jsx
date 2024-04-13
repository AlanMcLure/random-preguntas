import PropTypes from "prop-types";
import Timer from "./Timer";

function BatallaQuestion({ question, resetTimer }) {
  return (
    <div className="question-container mb-8">
      <p className="text-2xl">{question}</p>
      <Timer />
      <button onClick={resetTimer} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Reiniciar Timer</button>
    </div>
  );
}

BatallaQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  resetTimer: PropTypes.func.isRequired
};

export default BatallaQuestion;
