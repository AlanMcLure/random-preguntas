import PropTypes from "prop-types";
import { useState } from 'react';
import Timer from "./Timer";

function BatallaQuestion({ question, resetTimer }) {
  const [resetFlag, setResetFlag] = useState(false);

  const handleReset = () => {
    resetTimer();
    setResetFlag(!resetFlag);
  };

  return (
    <div className="question-container mb-8">
      <p className="text-2xl">{question}</p>
      <Timer key={resetFlag} /> {/* Agregar key para reiniciar el componente Timer */}
      <button onClick={handleReset} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Reiniciar Timer</button>
    </div>
  );
}

BatallaQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  resetTimer: PropTypes.func.isRequired // Se espera que resetTimer sea una función
};

export default BatallaQuestion;
