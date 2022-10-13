import React from 'react';
const SafeMarkdown = require('../templates/SafeMarkdown');

interface InstructionsProps {
  instructions: string;
}

const Instructions = ({instructions}: InstructionsProps) => {
  return <SafeMarkdown markdown={instructions} />;
};

export default Instructions;
