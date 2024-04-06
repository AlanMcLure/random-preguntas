import PropTypes from "prop-types";

function IntrosQuestion({ question }) {
  return (
    <div className="question-container mb-8">
      <p className="text-2xl">{question}</p>
    </div>
  );
}

IntrosQuestion.propTypes = {
  question: PropTypes.string.isRequired
};

export default IntrosQuestion;
