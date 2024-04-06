import PropTypes from "prop-types";

function BatallaQuestion({ question }) {
  return (
    <div className="question-container mb-8">
      <p className="text-2xl">{question}</p>
    </div>
  );
}

BatallaQuestion.propTypes = {
  question: PropTypes.string.isRequired
};

export default BatallaQuestion;
