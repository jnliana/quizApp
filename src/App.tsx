import { useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Question } from './components/Question/Question';
import { useQuestions } from './hooks/useQuestions';
import { Error } from './components/Error/Error';
import { Loader } from './components/Loader/Loader';
import { StartScreen } from './components/StartScreen/StartScreen';

function App() {
  const { state, dispatch } = useQuestions();
  const { questions, status, index, score, answer } = state;
  // console.log('status', status);
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
    <div className='bg-slate-900 min-h-screen p-6 flex flex-col'>
      <Header />
      <Main>
        {status === 'error' && <Error />}
        {status === 'loading' && <Loader />}
        {status === 'ready' && (
          <StartScreen
            numQuestion={questions.length}
            dispatch={dispatch}
          />
        )}
        {status === 'active' && (
          <Question
            questionData={questions[index]}
            answer={answer}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
