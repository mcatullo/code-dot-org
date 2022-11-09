import React from 'react';

interface StartModeHeaderProps {
  children?: React.ReactNode;
}

const StartModeHeader = ({children}: StartModeHeaderProps) => {
  return (
    <div>
      <p>This is start mode!! I could put a save button here!</p>
      {children}
    </div>
  );
};

export default StartModeHeader;
