import {CodeMirrorWrapper} from '../editors/codemirror/CodeMirrorWrapper';
import JavaRunner from '../runners/JavaRunner';
import {
  Lab,
  JavalabView,
  LabLayout,
  AppType,
  RunButton,
  ControlButton
} from '../types';

export class Javalab implements Lab {
  editor: CodeMirrorWrapper;
  hasConsole = true;
  view: JavalabView;
  layout: LabLayout;
  type: AppType;
  javaRunner: JavaRunner;
  runButton: RunButton;
  controlButtons: Array<ControlButton>;

  constructor(viewType: JavalabView) {
    this.editor = new CodeMirrorWrapper();
    this.view = viewType;
    this.layout = {
      leftPanel: ['instructions', 'view'],
      rightPanel: ['editor', 'console', 'controlBar']
    };
    this.type = 'Javalab';
    this.javaRunner = new JavaRunner();
    this.runButton = {
      onRun: this.runButtonClick.bind(this),
      onStop: this.stopButtonClick.bind(this),
      runText: 'run',
      stopText: 'stop'
    };
    this.controlButtons = ['run'];
  }

  runButtonClick() {
    this.javaRunner.run();
  }

  stopButtonClick() {
    this.javaRunner.stop();
  }
}
