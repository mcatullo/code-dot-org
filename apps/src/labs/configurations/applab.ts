import {DropletWrapper} from '../editors/droplet/DropletWrapper';
import {
  Lab,
  AppLabView,
  LabLayout,
  AppType,
  RunButton,
  ControlButton
} from '../types';

export class Applab implements Lab {
  editor: DropletWrapper;
  hasConsole = true;
  view: AppLabView;
  layout: LabLayout;
  type: AppType;
  runButton: RunButton;
  controlButtons: Array<ControlButton>;

  constructor() {
    this.editor = new DropletWrapper();
    this.view = 'applab';
    this.layout = {
      leftPanel: ['view', 'controlBar'],
      rightPanel: ['instructions', 'editor', 'console']
    };
    this.type = 'Applab';
    this.runButton = {
      onRun: () => console.log('running'),
      onStop: () => console.log('stopping'),
      runText: 'run',
      stopText: 'stop'
    };
    this.controlButtons = ['run'];
  }
}
