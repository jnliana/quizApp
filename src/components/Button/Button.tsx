export const Button = ({
  children,
  type = 'button',
  handleClick,
  attr,
  disabled = false,
}: any) => {
  return (
    <button
      type={type}
      className='bg-slate-500 p-2 rounded-xl text-white'
      onClick={() => handleClick(attr)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
