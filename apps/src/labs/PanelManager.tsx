import React from 'react';
import Panel from './Panel';
import moduleStyles from './labs.module.scss';

interface PanelManagerProps {
  leftPanels: Array<JSX.Element>;
  rightPanels: Array<JSX.Element>;
}

const PanelManager = ({leftPanels, rightPanels}: PanelManagerProps) => {
  console.log(moduleStyles.panelContainer);
  return <div className={moduleStyles.panelContainer}>
    <div>
      {leftPanels.map((panel, index) => {
        return <Panel panelContents={panel} width={'100%'} height={'100%'} key={`leftPanel-${index}`}/> 
      })}
    </div>
    <div>
      {rightPanels.map((panel, index) => {
        return <Panel panelContents={panel} width={'100%'} height={'100%'} key={`rightPanel-${index}`} /> 
      })}
    </div>
  </div>
}

export default PanelManager;