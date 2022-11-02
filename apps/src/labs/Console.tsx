import React from 'react';
import {useSelector} from 'react-redux';
import {ReduxStore} from './types';

const Console = () => {
  const logs = useSelector((state: ReduxStore) => state.labs.consoleLogs);

  return (
    <div>
      {logs.map((log: any, index: number) => {
        return <p key={index}>{log}</p>;
      })}
    </div>
  );
};

export default Console;
