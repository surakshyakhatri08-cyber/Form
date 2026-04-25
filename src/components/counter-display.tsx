const CounterDisplay = ({ count, text } : {count: number, text: string}) => {
  return (
    <>
      <h1 className="text-gray-400 text-xl font-bold uppercase tracking-widest mb-4">
        {text || "Simple Counter App"}
      </h1>
      <p className="text-[10px] text-gray-300 italic">Live Preview of my text</p>

      <div className="text-8xl font-black text-gray-800 mb-8">
        {count}
      </div>
    </>
  );
};

export default CounterDisplay;