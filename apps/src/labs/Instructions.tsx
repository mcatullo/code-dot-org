import React from 'react';
const SafeMarkdown = require('../templates/SafeMarkdown');

interface InstructionsProps {
  instructions: string;
}

const Instructions = ({instructions}: InstructionsProps) => {
  return (
    <div className="instructions">
      <SafeMarkdown markdown={instructions} />
    </div>
  );
};

export default Instructions;
