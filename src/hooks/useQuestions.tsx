import { useReducer } from 'react';

const INITIAL_STATE: any = {
  quetions: [],
  status: 'loading', // loading, ready, active, finished, error
  index: 0,
  score: 0,
  answer: 0,
  highscore: 0,
  secondsRemaining: 200,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };

    case 'active':
      return {
        ...state,
        status: 'active',
      };

    case 'answer': {
      const { score, questions, index } = state;
      const { points, correctOption } = questions[index];
      return {
        ...state,
        answer: action.payload,
        score: action.payload === correctOption ? score + points : score,
      };
    }
    case 'dataFailed':
      return { ...state, status: 'error' };

    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: 0 };
    case 'restart':
      return {
        ...INITIAL_STATE,
        questions: state.questions,
        status: 'ready',
        highscore: state.highscore,
      };
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.score > state.highscore ? state.score : state.highscore,
      };
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining
          ? state.secondsRemaining - 1
          : 0,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };

    default:
      throw new Error('Invalid action type');
      break;
  }
}

export const useQuestions = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return {
    state,
    dispatch,
  };
};
