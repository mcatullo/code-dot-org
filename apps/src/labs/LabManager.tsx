import {Lab, Level, LabComponent} from './types';
import CodeMirror from './editors/CodeMirror';
import React from 'react';
import Droplet from './editors/Droplet';
import Instructions from './Instructions';
import NeighborhoodVisualization from './views/NeighborhoodVisualization';
import Console from './Console';
import TheaterVisualization from './views/TheaterVisualization';
import ApplabVisualization from './views/ApplabVisualization';
import applabReducer from './reduxStore/applabSlice';
import LabView from './LabView';
const {registerReducers} = require('../redux');

export default function init(lab: Lab, level: Level) {
  registerReduxSlices();
  const leftPanels = generateLayoutComponents(lab.layout.leftPanel, lab, level);
  const rightPanels = generateLayoutComponents(
    lab.layout.rightPanel,
    lab,
    level
  );
  return <LabView leftPanels={leftPanels} rightPanels={rightPanels} />;
}

export function generateLayoutComponents(
  panelList: Array<LabComponent>,
  lab: Lab,
  level: Level
) {
  let components: Array<JSX.Element> = [];
  panelList.forEach((panel, index) => {
    switch (panel) {
      case 'editor':
        if (lab.editor === 'CodeMirror') {
          components.push(<CodeMirror />);
        } else {
          components.push(<Droplet />);
        }
        break;
      case 'console':
        components.push(<Console />);
        break;
      case 'instructions':
        if (level.longInstructions) {
          components.push(
            <Instructions instructions={level.longInstructions} />
          );
        }
        break;
      case 'view':
        if (lab.view === 'neighborhood') {
          components.push(<NeighborhoodVisualization />);
        } else if (lab.view === 'theater') {
          components.push(<TheaterVisualization />);
        } else if (lab.view === 'applab') {
          components.push(<ApplabVisualization />);
        }
    }
  });
  return components;
}

function registerReduxSlices() {
  registerReducers({applabReducer});
}
