export const Progress = ({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
}: any) => {
  const currentQuestion = index + 1;
  return (
    <header className='mb-12 grid justify-between gap-4 grid-cols-2 text-md text-white'>
      <progress
        max={numQuestions}
        value={currentQuestion}
        className='h-3 w-full grid col-start-1 col-end-[-1] appearance-none'
      />

      <p>
        Question <strong>{currentQuestion}</strong> / {numQuestions}
      </p>

      <p className='text-right'>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};
