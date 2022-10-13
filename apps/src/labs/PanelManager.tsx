import React from 'react';
import Panel from './Panel';

interface PanelManagerProps {
  leftPanels: Array<JSX.Element>;
  rightPanels: Array<JSX.Element>;
}

const PanelManager = ({leftPanels, rightPanels}: PanelManagerProps) => {
  return (
    <div className="panelContainer">
      <div className="panelColumn leftPanel">
        {leftPanels.map((panel, index) => {
          return (
            <Panel
              panelContents={panel}
              width={'100%'}
              height={'100%'}
              key={`leftPanel-${index}`}
            />
          );
        })}
      </div>
      <div className="panelColumn">
        {rightPanels.map((panel, index) => {
          return (
            <Panel
              panelContents={panel}
              width={'100%'}
              height={'100%'}
              key={`rightPanel-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PanelManager;
