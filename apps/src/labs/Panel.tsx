import React from 'react';

interface PanelProps {
  panelContents: JSX.Element,
  width: number | string;
  height: number | string;
}

const Panel = ({panelContents, width, height}: PanelProps) => {
  return <div style={{width: width, height: height}} className='panel'>{panelContents}</div>
}

export default Panel;