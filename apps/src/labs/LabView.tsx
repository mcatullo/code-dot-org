import React from 'react';
import PanelManager from './PanelManager';
import {Lab, Level} from './types';
import './labs.scss';
import {generateLayoutComponents} from './LabManager';

interface LabViewProps {
  lab: Lab;
  level: Level;
}

const LabView = ({lab, level}: LabViewProps) => {
  const leftPanels = generateLayoutComponents(lab.layout.leftPanel, lab, level);
  const rightPanels = generateLayoutComponents(
    lab.layout.rightPanel,
    lab,
    level
  );

  return <PanelManager leftPanels={leftPanels} rightPanels={rightPanels} />;
};

export default LabView;
