import {Lab, Level, LabComponent, RawLevel, AppOptions} from './types';
import CodeMirror from './editors/codemirror/CodeMirror';
import React from 'react';
import Instructions from './Instructions';
import NeighborhoodVisualization from './views/NeighborhoodVisualization';
import Console from './Console';
import TheaterVisualization from './views/TheaterVisualization';
import ApplabVisualization from './views/ApplabVisualization';
import applabReducer, {setMode} from './reduxStore/applabSlice';
import javalabReducer from './reduxStore/javalabSlice';
import commonReducer from './reduxStore/commonSlice';
import LabView from './LabView';
import ApplabEditor from './editors/ApplabEditor';
import {CodeMirrorWrapper} from './editors/codemirror/CodeMirrorWrapper';
import {DropletWrapper} from './editors/droplet/DropletWrapper';
import {convertLevel, getLabForLevel} from './middleware/labHelpers';
import RunButton from './controls/RunButton';
import ControlBar from './controls/ControlBar';
import {StartModeDecorator} from './configurations/StartModeDecorator';
const {getStore, registerReducers} = require('../redux');

export default function init(level: RawLevel, appOptions: AppOptions) {
  const convertedLevel = convertLevel(level);
  var lab = getLabForLevel(convertedLevel);
  lab = addDecorators(lab, appOptions);
  registerReduxSlices();
  initializeState(convertedLevel);
  const leftPanels = generateLayoutComponents(
    lab.getLayout().leftPanel,
    lab,
    convertedLevel
  );
  const rightPanels = generateLayoutComponents(
    lab.getLayout().rightPanel,
    lab,
    convertedLevel
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
  panelList.forEach(panel => {
    if (panel === 'editor') {
      const editor = lab.getEditor();
      if (editor instanceof CodeMirrorWrapper) {
        components.push(<CodeMirror />);
      } else if (editor instanceof DropletWrapper) {
        components.push(<ApplabEditor dropletWrapper={editor} />);
      }
    } else if (panel === 'console') {
      components.push(<Console />);
    } else if (panel === 'instructions') {
      if (level.longInstructions) {
        components.push(<Instructions instructions={level.longInstructions} />);
      }
    } else if (panel === 'view') {
      if (lab.getView() === 'neighborhood') {
        components.push(<NeighborhoodVisualization />);
      } else if (lab.getView() === 'theater') {
        components.push(<TheaterVisualization />);
      } else if (lab.getView() === 'applab') {
        components.push(<ApplabVisualization />);
      }
    } else if (panel === 'controlBar') {
      components.push(generateControlBar(lab));
    }
  });
  return components;
}

function registerReduxSlices() {
  registerReducers({
    applabV2: applabReducer,
    javalabV2: javalabReducer,
    labs: commonReducer
  });
}

function generateControlBar(lab: Lab): JSX.Element {
  const buttons = lab.getControlButtons().map((button, index) => {
    if (button.type === 'run') {
      return (
        <RunButton
          key={index}
          onRun={button.toggleOn}
          onStop={button.toggleOff}
          runText={button.toggleOnText}
          stopText={button.toggleOffText}
        />
      );
    }
  });
  return <ControlBar>{buttons}</ControlBar>;
}

function addDecorators(lab: Lab, appOptions: AppOptions): Lab {
  var labToReturn = lab;
  if (appOptions.isStartMode) {
    labToReturn = new StartModeDecorator(lab);
  }
  // if we want to do more decorators (readonly??) we can pass labToReturn to successize decorators
  return labToReturn;
}
