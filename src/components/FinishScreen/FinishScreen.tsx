import { Button } from '../Button/Button';

export const FinishScreen = ({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}: any) => {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = '🥇';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 80) emoji = '🙃';
  if (percentage >= 0 && percentage < 50) emoji = '🤨';
  if (percentage === 0) emoji = '🤦‍♂️';
  return (
    <>
      <p className='bg-[#1098ad] text-white rounded-lg p-8 mb-5'>
        <span className='text-lg mr-1'>{emoji}</span> You scored{' '}
        <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className='text-xl text-center mb-16 text-white'>
        (Highscore: {highscore} points)
      </p>
      <Button handleClick={() => dispatch({ type: 'restart' })}>
        Restart quiz
      </Button>
    </>
  );
};
