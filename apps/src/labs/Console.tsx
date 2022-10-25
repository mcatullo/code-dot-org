import React from 'react';
import {useSelector} from 'react-redux';

const Console = () => {
  const logs = useSelector((state: any) => state.labs.consoleLogs);

  return (
    <div>
      {logs.forEach((log: any) => {
        <p>{log}</p>;
      })}
    </div>
  );
};

export default Console;
