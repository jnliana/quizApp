import { Button } from '../Button/Button';

export const NextButton = ({ dispatch, answer }: any) => {
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
      attr={{ type: 'nextQuestion' }}
    >
      Next
    </Button>
  );

  const component = true ? Next : Finished;
  return <div className='flex justify-end pt-3'>{component}</div>;
};
