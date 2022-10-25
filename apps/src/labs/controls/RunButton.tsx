import React, {MouseEventHandler} from 'react';
import {useSelector} from 'react-redux';

interface ButtonProps {
  onRun: MouseEventHandler<HTMLButtonElement>;
  onStop: MouseEventHandler<HTMLButtonElement>;
  runText: string;
  stopText: string;
}

const RunButton = ({onRun, onStop, runText, stopText}: ButtonProps) => {
  const isRunning = useSelector((state: any) => state.labs.isRunning);

  return (
    <button onClick={isRunning ? onStop : onRun} type="button">
      {isRunning ? runText : stopText}
    </button>
  );
};

export default RunButton;
