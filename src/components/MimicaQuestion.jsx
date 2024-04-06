import PropTypes from "prop-types";

function MimicaQuestion({ question }) {
  return (
    <div className="question-container mb-8">
      <p className="text-2xl">{question}</p>
    </div>
  );
}

MimicaQuestion.propTypes = {
  question: PropTypes.string.isRequired
};

export default MimicaQuestion;
