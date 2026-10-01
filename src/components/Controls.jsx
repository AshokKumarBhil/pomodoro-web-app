function Controls({isRunning , setIsRunning}) {
  return (
    <div>
      <button className="cursor-pointer mr-2" onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button className="cursor-pointer">Reset</button>
    </div>
  );
}

export default Controls;
