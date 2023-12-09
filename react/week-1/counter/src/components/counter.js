import React, { useState } from "react";
import Button from "./button";
import Count from "./count";

const Counter = () => {
  const counterState = useState(0);
  const count = counterState[0];
  const setCount = counterState[1];
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
  const addOneFunction = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Count count={count} />
      <Button addOne={addOneFunction} />
      <h4>{feedback}</h4>
    </div>
  );
};

export default Counter;
