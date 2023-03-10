import React from "react";
import useWordGame from "./hooks/useWordGame";

export default function App() {
  const {
    text,
    textBoxRef,
    handleChange,
    isTimeRunning,
    startGame,
    timeRemaining,
    wordCount,
  } = useWordGame();

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        {timeRemaining === 0 ? "Start again" : "Start"}
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}
