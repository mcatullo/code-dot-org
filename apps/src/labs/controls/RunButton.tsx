import React, {MouseEventHandler} from 'react';
import {useSelector} from 'react-redux';
import {ReduxStore} from '../types';

interface ButtonProps {
  onRun: MouseEventHandler<HTMLButtonElement>;
  onStop: MouseEventHandler<HTMLButtonElement>;
  runText: string;
  stopText: string;
}

const RunButton = ({onRun, onStop, runText, stopText}: ButtonProps) => {
  const isRunning = useSelector((state: ReduxStore) => state.labs.isRunning);

  return (
    <button onClick={isRunning ? onStop : onRun} type="button">
      {isRunning ? stopText : runText}
    </button>
  );
};

export default RunButton;
