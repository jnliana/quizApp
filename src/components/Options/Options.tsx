export const Options = ({ questionData, answer, dispatch }: any) => {
  const { options, correctOption } = questionData;
  const DEFAULT_STYLE =
    'block cursor-pointer bg-transparent w-full text-white border-slate-700 border-2 py-2 px-5  mb-2 rounded-full text-left disabled:cursor-not-allowed';
  const DisabledStyle = 'hover:bg-slate-600 hover:border-slate-800';
  const CorrectAnswer = 'bg-[#1098ad] border-[#1098ad]';
  const WrongAnswer = 'bg-[#ffa94d] border-[#ffa94d]';
  const isDisabled = answer > 0;
  return (
    <div className='pt-8 '>
      {options.map((option: any, index: number) => {
        return (
          <button
            key={index}
            type='button'
            className={` ${DEFAULT_STYLE} ${isDisabled ? '' : DisabledStyle} ${
              index + 1 === answer ? 'answer' : ''
            } ${
              answer !== 0
                ? index + 1 === correctOption
                  ? CorrectAnswer
                  : WrongAnswer
                : ''
            }  `}
            onClick={() =>
              dispatch({
                type: 'answer',
                payload: index + 1,
              })
            }
            disabled={isDisabled}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
