import { Button } from '../Button/Button';

export const NextButton = ({ dispatch, answer, index, numQuestion }: any) => {
  const isDisabled = answer === 0;
  const Next = (
    <Button
      handleClick={dispatch}
      disabled={isDisabled}
      attr={{ type: 'nextQuestion' }}
    >
      Next
    </Button>
  );
  const Finished = (
    <Button
      handleClick={dispatch}
      disabled={isDisabled}
      attr={{ type: 'finish' }}
    >
      Finished
    </Button>
  );

  const currentQuestion = index + 1;

  const component = numQuestion > currentQuestion ? Next : Finished;
  return <div className='flex justify-end pt-3'>{component}</div>;
};
