import React from 'react';
import PanelManager from './PanelManager';
import './labs.scss';

interface LabViewProps {
  leftPanels: Array<JSX.Element>;
  rightPanels: Array<JSX.Element>;
}

const LabView = ({leftPanels, rightPanels}: LabViewProps) => {
  return <PanelManager leftPanels={leftPanels} rightPanels={rightPanels} />;
};

export default LabView;
