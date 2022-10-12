import React from 'react';

interface PanelProps {
  panelContents: JSX.Element,
  width: number;
  height: number;
}

const Panel = ({panelContents, width, height}: PanelProps) => {
  return <div style={{width: width, height: height}}>{panelContents}</div>
}

export default Panel;