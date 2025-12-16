import { useState, useEffect, useRef, useCallback } from 'react';
import './App.css'
import { StartTest } from './components/start-test';
import { QuestionCard } from './components/question-card';
import { ResultScreen } from './components/result-screen';
import { questionImages } from './assets/images';
import { questions } from './questions';

const QUESTION_TIME = 30;
const OPTIONS_DELAY = 4;

function App() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finished, setFinished] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [empty, setEmpty] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [optionsVisible, setOptionsVisible] = useState(false);

  // Refs for timer management
  const intervalRef = useRef<number | null>(null);
  const optionsTimeoutRef = useRef<number | null>(null);
  const answeredRef = useRef(false);

  const clearTimers = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (optionsTimeoutRef.current) {
      clearTimeout(optionsTimeoutRef.current);
      optionsTimeoutRef.current = null;
    }
  }, []);

  const goToNextQuestion = useCallback(() => {
    clearTimers();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setFinished(true);
    }
  }, [currentQuestion, clearTimers]);

  const startTimerForQuestion = useCallback(() => {
    // Clear any existing timers
    clearTimers();
    answeredRef.current = false;

    // Reset states for new question
    setTimeLeft(QUESTION_TIME);
    setOptionsVisible(false);

    // Show options after delay
    optionsTimeoutRef.current = window.setTimeout(() => {
      setOptionsVisible(true);
    }, OPTIONS_DELAY * 1000);

    // Countdown timer
    let time = QUESTION_TIME;
    intervalRef.current = window.setInterval(() => {
      time -= 1;
      setTimeLeft(time);

      if (time <= 0 && !answeredRef.current) {
        // Time's up - count as empty
        answeredRef.current = true;
        setEmpty(prev => prev + 1);
        goToNextQuestion();
      }
    }, 1000);
  }, [clearTimers, goToNextQuestion]);

  // Start timer when question changes or test starts
  useEffect(() => {
    if (started && !finished) {
      // Use setTimeout with 0 delay to avoid synchronous setState warning
      const initTimeout = window.setTimeout(() => {
        startTimerForQuestion();
      }, 0);
      return () => {
        window.clearTimeout(initTimeout);
        clearTimers();
      };
    }
    return clearTimers;
  }, [currentQuestion, started, finished, startTimerForQuestion, clearTimers]);

  const handleAnswer = (answer: string) => {
    if (answeredRef.current) return; // Prevent double answers
    answeredRef.current = true;

    // Check answer
    if (answer === questions[currentQuestion].answer) {
      setCorrect(prev => prev + 1);
    } else {
      setWrong(prev => prev + 1);
    }

    goToNextQuestion();
  };

  const handleRestart = () => {
    clearTimers();
    setStarted(false);
    setCurrentQuestion(0);
    setFinished(false);
    setCorrect(0);
    setWrong(0);
    setEmpty(0);
    setTimeLeft(QUESTION_TIME);
    setOptionsVisible(false);
  };

  return (
    <>
      {!started && <StartTest onStart={() => setStarted(true)} />}

      {started && !finished && (
        <main className="app-container">
          <QuestionCard
            image={questionImages[currentQuestion + 1]}
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onAnswer={handleAnswer}
            timeLeft={timeLeft}
            optionsVisible={optionsVisible}
            questionNumber={currentQuestion + 1}
            totalQuestions={questions.length}
          />
        </main>
      )}

      {finished && (
        <ResultScreen
          correct={correct}
          wrong={wrong}
          empty={empty}
          total={questions.length}
          onRestart={handleRestart}
        />
      )}
    </>
  )
}

export default App
