import {Lab, Level, LabComponent} from './types';
import CodeMirror from './editors/codemirror/CodeMirror';
import React from 'react';
import Instructions from './Instructions';
import NeighborhoodVisualization from './views/NeighborhoodVisualization';
import Console from './Console';
import TheaterVisualization from './views/TheaterVisualization';
import ApplabVisualization from './views/ApplabVisualization';
import applabReducer, {setMode} from './reduxStore/applabSlice';
import LabView from './LabView';
import ApplabEditor from './editors/ApplabEditor';
import {CodeMirrorWrapper} from './editors/codemirror/CodeMirrorWrapper';
import {DropletWrapper} from './editors/droplet/DropletWrapper';
const {getStore, registerReducers} = require('../redux');

export default function init(lab: Lab, level: Level) {
  registerReduxSlices();
  initializeState(level);
  const leftPanels = generateLayoutComponents(lab.layout.leftPanel, lab, level);
  const rightPanels = generateLayoutComponents(
    lab.layout.rightPanel,
    lab,
    level
  );
  return <LabView leftPanels={leftPanels} rightPanels={rightPanels} />;
}

function initializeState(level: Level) {
  if (level.type === 'Applab') {
    if (level.designModeAtStart) {
      getStore().dispatch(setMode('design'));
    }
  }
}

function generateLayoutComponents(
  panelList: Array<LabComponent>,
  lab: Lab,
  level: Level
) {
  let components: Array<JSX.Element> = [];
  panelList.forEach((panel, index) => {
    switch (panel) {
      case 'editor':
        if (lab.editor instanceof CodeMirrorWrapper) {
          components.push(<CodeMirror />);
        } else if (lab.editor instanceof DropletWrapper) {
          components.push(<ApplabEditor dropletWrapper={lab.editor} />);
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
  registerReducers({applabV2: applabReducer});
}
