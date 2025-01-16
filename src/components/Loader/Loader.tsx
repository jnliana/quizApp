export const Loader = () => {
  return (
    <div className='flex flex-col items-center gap-4 text-white'>
      <div className='loader w-12 h-6 bg-transparent animate-loader'></div>
      <p>Loading questions...</p>
    </div>
  );
};
