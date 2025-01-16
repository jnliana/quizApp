import { Options } from '../Options/Options';

export const Question = ({ questionData, answer, dispatch }: any) => {
  if (!questionData) return null;
  const { question } = questionData;
  return (
    <div className='font-roboto'>
      <h4 className='text-white'>{question}</h4>
      <Options
        questionData={questionData}
        answer={answer}
        dispatch={dispatch}
      />
    </div>
  );
};
