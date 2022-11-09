import {CodeMirrorWrapper} from '../editors/codemirror/CodeMirrorWrapper';
import JavaRunner from '../runners/JavaRunner';
import {
  Lab,
  JavalabView,
  LabLayout,
  AppType,
  Runner,
  ButtonConfiguration,
  Editor,
  ViewType
} from '../types';

export class Javalab implements Lab {
  editor: CodeMirrorWrapper;
  view: JavalabView;
  layout: LabLayout;
  javaRunner: Runner;
  controlButtons: Array<ButtonConfiguration>;

  constructor(viewType: JavalabView) {
    this.editor = new CodeMirrorWrapper();
    this.view = viewType;
    this.layout = {
      leftPanel: ['instructions', 'view'],
      rightPanel: ['editor', 'console', 'controlBar']
    };
    this.javaRunner = new JavaRunner();
    this.controlButtons = [
      {
        // still don't love this configuration
        toggleOn: this.javaRunner.onRun,
        toggleOff: this.javaRunner.onStop,
        toggleOnText: 'run',
        toggleOffText: 'stop',
        onIcon: undefined,
        offIcon: undefined,
        type: 'run'
      }
    ];
  }

  getEditor(): Editor {
    return this.editor;
  }

  hasConsole(): boolean {
    return true;
  }

  getView(): ViewType {
    return this.view;
  }

  getLayout(): LabLayout {
    return this.layout;
  }

  getType(): AppType {
    return 'Javalab';
  }

  getControlButtons(): ButtonConfiguration[] {
    return this.controlButtons;
  }

  // is this necessary?
  getRunner(): Runner {
    return this.javaRunner;
  }
}
