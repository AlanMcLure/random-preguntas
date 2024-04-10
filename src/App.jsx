import { useState } from 'react';
import './App.css';
import BatallaQuestion from './components/BatallaQuestion';
import IntrosQuestion from './components/IntrosQuestion';
import MimicaQuestion from './components/MimicaQuestion';
import questionsData from './questions.json';

function App() {
  const [mimicaQuestions, setMimicaQuestions] = useState(questionsData.mimica);
  const [introsQuestions, setIntrosQuestions] = useState(questionsData.intros);
  const [batallaQuestions, setBatallaQuestions] = useState(questionsData.batalla);
  const [currentQuestion, setCurrentQuestion] = useState({ question: "", category: "", introUrl: "" });

  const nuevaPregunta = () => {
    const categories = [
      { name: "mimica", questions: mimicaQuestions, setQuestions: setMimicaQuestions },
      { name: "intros", questions: introsQuestions, setQuestions: setIntrosQuestions },
      { name: "batalla", questions: batallaQuestions, setQuestions: setBatallaQuestions }
    ].filter(category => category.questions.length > 0);

    if (categories.length === 0) {
      alert("No hay más preguntas");
      return;
    }

    const selectedCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomIndex = Math.floor(Math.random() * selectedCategory.questions.length);
    const randomQuestion = selectedCategory.questions[randomIndex];

    console.log(randomQuestion.pregunta, selectedCategory.name, randomQuestion.introUrl)

    selectedCategory.setQuestions(selectedCategory.questions.filter((_, index) => index !== randomIndex));
    setCurrentQuestion({ question: randomQuestion.pregunta, category: selectedCategory.name, introUrl: randomQuestion.introUrl });
  };

  let questionComponent;
  switch (currentQuestion.category) {
    case "mimica":
      questionComponent = <MimicaQuestion question={currentQuestion.question} />;
      break;
    case "intros":
      questionComponent = <IntrosQuestion question={currentQuestion.question} introUrl={currentQuestion.introUrl} />;
      break;
    case "batalla":
      questionComponent = <BatallaQuestion question={currentQuestion.question} />;
      break;
    default:
      questionComponent = null;
  }

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Preguntados</h1>
      {questionComponent}
      <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nuevaPregunta}>Nueva pregunta</button>
    </div>
  );
}

export default App;
