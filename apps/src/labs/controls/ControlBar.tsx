import React from 'react';

interface ControlBarProps {
  children?: React.ReactNode;
}

const ControlBar = ({children}: ControlBarProps) => {
  return <div>{children}</div>;
};

export default ControlBar;
