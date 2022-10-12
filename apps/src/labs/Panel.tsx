import React from 'react';
//const moduleStyles = require('./labs.module.scss');
import moduleStyles from './labs.module.scss';

interface PanelProps {
  panelContents: JSX.Element,
  width: number | string;
  height: number | string;
}

const Panel = ({panelContents, width, height}: PanelProps) => {
  return <div style={{width: width, height: height}} className={moduleStyles.panel}>{panelContents}</div>
}

export default Panel;