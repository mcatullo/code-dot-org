import React from 'react';
import CodeMirror from './editors/CodeMirror';
import Droplet from './editors/Droplet';
import Console from './Console';
import Instructions from './Instructions';
import NeighborhoodVisualization from './views/NeighborhoodVisualization';
import PanelManager from './PanelManager';
import { Lab, Level, LabComponent } from './types';

interface LabViewProps {
  lab: Lab,
  level: Level
}

const LabView = ({lab, level}: LabViewProps) => {

  function generatePanelComponents(panelList: Array<LabComponent>) {
    let components: Array<JSX.Element> = [];
    panelList.forEach((panel, index) => {
      switch(panel) {
        case "editor":
          if (lab.editor === 'CodeMirror') {
            components.push(<CodeMirror/>);
          } else {
            components.push(<Droplet/>);
          }
          break;
        case "console":
          components.push(<Console/>);
          break;
        case "instructions":
          if (level.longInstructions) {
            components.push(<Instructions instructions={level.longInstructions} />);
          }
          break;
        case "view":
          components.push(<NeighborhoodVisualization />);
      }
    });
    return components;
  }

  const leftPanels = generatePanelComponents(lab.layout.leftPanel);
  const rightPanels = generatePanelComponents(lab.layout.rightPanel);


  return <PanelManager leftPanels={leftPanels} rightPanels={rightPanels}/>
}

export default LabView;