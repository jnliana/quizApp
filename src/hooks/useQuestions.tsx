import { useReducer } from 'react';

const INITIAL_STATE: any = {
  quetions: [],
  status: 'loading', // loading, ready, active, finished, error
  index: 0,
  score: 0,
  answer: 0,
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
