import { useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Question } from './components/Question/Question';
import { useQuestions } from './hooks/useQuestions';
import { Error } from './components/Error/Error';
import { Loader } from './components/Loader/Loader';
import { StartScreen } from './components/StartScreen/StartScreen';
import { Progress } from './components/Progress/Progress';
import { FinishScreen } from './components/FinishScreen/FinishScreen';
import { Timer } from './components/Timer/Timer';
import { NextButton } from './components/NextButton/NextButton';

function App() {
  const { state, dispatch } = useQuestions();
  const {
    questions,
    status,
    index,
    score,
    answer,
    highscore,
    secondsRemaining,
  } = state;
  const numQuestion = questions ? questions.length : 0;
  const maxPossiblePoints = questions
    ? questions.reduce((accumulator, value) => accumulator + value.points, 0)
    : 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch('http://localhost:9000/questions');
        const response = await request.json();
        dispatch({ type: 'dataReceived', payload: response });
      } catch (error) {
        dispatch({ type: 'dataFailed' });
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch]);
  return (
    <div className='bg-slate-900 min-h-screen pt-10 flex flex-col'>
      <Header />
      <Main>
        {status === 'error' && <Error />}
        {status === 'loading' && <Loader />}
        {status === 'ready' && (
          <StartScreen
            numQuestion={numQuestion}
            dispatch={dispatch}
          />
        )}
        {status === 'active' && (
          <div className='w-2/3'>
            <Progress
              index={index}
              numQuestions={numQuestion}
              points={score}
              maxPossiblePoints={maxPossiblePoints}
            />
            <Question
              questionData={questions[index]}
              answer={answer}
              dispatch={dispatch}
              numQuestion={numQuestion}
              index={index}
            />
            <div className='flex justify-between'>
              <Timer
                dispatch={dispatch}
                secondsRemaining={secondsRemaining}
              />
              <NextButton
                answer={answer}
                dispatch={dispatch}
                numQuestion={numQuestion}
                index={index}
              />
            </div>
          </div>
        )}
        {status === 'finished' && (
          <FinishScreen
            points={score}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
