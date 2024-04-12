import PropTypes from "prop-types";
import Timer from "./Timer";

function BatallaQuestion({ question }) {
  return (
    <div className="question-container mb-8">
      <p className="text-2xl">{question}</p>
      <Timer />
    </div>
  );
}

BatallaQuestion.propTypes = {
  question: PropTypes.string.isRequired
};

export default BatallaQuestion;
