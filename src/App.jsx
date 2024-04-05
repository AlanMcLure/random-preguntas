import { useState } from 'react';
import './App.css';
import questionsData from './questions.json';

function App() {
  const [mimicaQuestions, setMimicaQuestions] = useState(questionsData.mimica);
  const [introsQuestions, setIntrosQuestions] = useState(questionsData.intros);
  const [batallaQuestions, setBatallaQuestions] = useState(questionsData.batalla);
  const [currentQuestion, setCurrentQuestion] = useState({question: "", category: ""});

  const nuevaPregunta = () => {
    const categories = [
      {name: "mimica", questions: mimicaQuestions, setQuestions: setMimicaQuestions},
      {name: "intros", questions: introsQuestions, setQuestions: setIntrosQuestions},
      {name: "batalla", questions: batallaQuestions, setQuestions: setBatallaQuestions}
    ].filter(category => category.questions.length > 0); 

    if (categories.length === 0) {
      alert("No hay más preguntas");
      return;
    }

    const selectedCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomIndex = Math.floor(Math.random() * selectedCategory.questions.length);
    const randomQuestion = selectedCategory.questions[randomIndex];
    selectedCategory.setQuestions(selectedCategory.questions.filter((_, index) => index !== randomIndex));
    setCurrentQuestion({question: randomQuestion.pregunta, category: selectedCategory.name});
  };

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Preguntados</h1>
      {currentQuestion.question && (
        <div className="question-container mb-8">
          <p className="text-2xl">{currentQuestion.question}</p>
          <p className="text-xl">Categoría: {currentQuestion.category}</p>
        </div>
      )}
      <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nuevaPregunta}>Nueva pregunta</button>
    </div>
  );
}

export default App;