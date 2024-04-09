import PropTypes from "prop-types";
import Audio from "./Audio";

function IntrosQuestion({ question, introUrl }) {
  return (
    <div className="question-container mb-8">
      <p className="text-2xl">{question}</p>
      <Audio videoId={introUrl} />
    </div>
  );
}

IntrosQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  introUrl: PropTypes.string.isRequired
};

export default IntrosQuestion;
