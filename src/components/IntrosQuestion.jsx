import PropTypes from "prop-types";

function IntrosQuestion({ question, introUrl }) {
  return (
    <div className="question-container mb-8">
      <p className="text-2xl">{question}</p>
      <iframe
        title="Intro"
        width="300"
        height="150"
        src={introUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}

IntrosQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  introUrl: PropTypes.string.isRequired
};

export default IntrosQuestion;
