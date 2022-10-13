import React from 'react';
import CodeMirror from './editors/CodeMirror';
import Droplet from './editors/Droplet';
import Console from './Console';
import Instructions from './Instructions';
import NeighborhoodVisualization from './views/NeighborhoodVisualization';
import PanelManager from './PanelManager';
import { Lab, Level, LabComponent } from './types';
import './labs.scss';
import {generateLayoutComponents} from './LabManager';

interface LabViewProps {
  lab: Lab,
  level: Level
}

const LabView = ({lab, level}: LabViewProps) => {

  const leftPanels = generateLayoutComponents(lab.layout.leftPanel, lab, level);
  const rightPanels = generateLayoutComponents(lab.layout.rightPanel, lab, level);

  return <PanelManager leftPanels={leftPanels} rightPanels={rightPanels}/>
}

export default LabView;