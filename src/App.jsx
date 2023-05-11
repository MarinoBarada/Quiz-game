import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import End from "./layouts/endLayout/End";
import Start from "./layouts/startLayout/Start";
import Playing from "./layouts/playingLayout/Playing";
import QuizContainer from "./components/containers/QuizContainer";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [id, setId] = useState(0);
  const [score, setScore] = useState(0);
  const [optionsList, setOptionsList] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [quizState, setQuizState] = useState("start");
  const [difficulty, setDifficulty] = useState("");
  const [number, setNumber] = useState(1);
  const [category, setCategory] = useState(0);
  const [question, setQuestion] = useState("");

  //Setting the URL value
  const difficultySelect = (event) => {
    setDifficulty(event.target.value);
  };

  const categorySelect = (event) => {
    setCategory(event.target.value);
  };

  function numberChange(e) {
    if (0 < e.target.value && e.target.value < 51) setNumber(e.target.value);
  }

  //URL setting for API
  function setUrlAPI() {
    let tempurl = `https://opentdb.com/api.php?amount=${number}`;

    if (category) {
      tempurl = tempurl.concat(`&category=${category}`);
    }

    if (difficulty != "") {
      tempurl = tempurl.concat(`&difficulty=${difficulty}`);
    }

    getData(tempurl);
    setQuizState("playing"); //Change of layout to playing
  }
  //Get data from API
  async function getData(url) {
    try {
      const response = await axios.get(url);
      setData(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }
  //Decoding HTML
  function HTMLDecode(textString) {
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;
  }
  //Setting question data values
  useEffect(() => {
    if (!loading) {
      let tempInAnswer = data[id].incorrect_answers;
      let tempCorrAnswer = data[id].correct_answer;
      setCorrectAnswer(HTMLDecode(tempCorrAnswer));
      tempInAnswer.splice(
        Math.floor(Math.random() * (tempInAnswer.length + 1)),
        0,
        tempCorrAnswer
      ); //Setting the correct answer at the working position in a array
      setSelectedOption("");
      setOptionsList(tempInAnswer);
      setQuestion(data[id].question);
    }
  }, [id, loading]);
  //Increasing the score and switching to a new question after 1s
  function handleClick(e) {
    if (e.target.innerText === correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(e.target.innerText);
    if (id != number - 1) {
      setTimeout(() => {
        setId(id + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setQuizState("end"); //Change of layout to end
      }, 1000);
    }
  }
  //Changing the color of the button depending on the correct or incorrect answer
  const buttonColor = (option) => {
    if (option === selectedOption && option === correctAnswer) {
      return "green";
    } else if (option === selectedOption) {
      return "red";
    } else {
      return "blue";
    }
  };
  //Restart game
  function restartGame() {
    setScore(0);
    setId(0);
    setLoading(true);
    setCorrectAnswer("");
    setOptionsList([]);
    setSelectedOption("");
    setDifficulty("");
    setNumber(1);
    setCategory(0);
    setQuizState("start"); //Change of layout to start
  }

  return (
    <div className="App">
      <QuizContainer>
        <div className="quiz-head">
          <h1 className="quiz-title">Quiz Game</h1>
          {quizState == "start" && (
            <Start
              category={category}
              difficulty={difficulty}
              number={number}
              action1={categorySelect}
              action2={difficultySelect}
              action3={numberChange}
              action4={setUrlAPI}
            />
          )}
        </div>
        {quizState == "playing" && (
          <>
            <Playing
              score={score}
              id={id}
              number={number}
              loading={!loading}
              HTMLDecode={HTMLDecode}
              question={question}
              optionsList={optionsList}
              action={handleClick}
              color={buttonColor}
            />
          </>
        )}

        {quizState == "end" && (
          <End score={score} id={id} number={number} action={restartGame} />
        )}
      </QuizContainer>
    </div>
  );
}

export default App;
