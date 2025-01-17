import { Button } from '../Button/Button';

export const StartScreen = ({ numQuestion, dispatch }: any) => {
  return (
    <div className='text-white text-center space-y-6'>
      <h2 className='text-4xl'>Welcome to The React Quiz!</h2>
      <h3 className='text-2xl'>
        {numQuestion} questions to test your React mastery
      </h3>
      <Button
        handleClick={dispatch}
        attr={{ type: 'active' }}
      >
        Let's Start
      </Button>
    </div>
  );
};
