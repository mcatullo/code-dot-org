import {DropletWrapper} from '../editors/droplet/DropletWrapper';
import {
  Lab,
  LabLayout,
  AppType,
  ButtonConfiguration,
  Editor,
  Runner,
  ViewType
} from '../types';

export class Applab implements Lab {
  editor: DropletWrapper;
  layout: LabLayout;
  controlButtons: Array<ButtonConfiguration>;

  constructor() {
    this.editor = new DropletWrapper();
    this.layout = {
      leftPanel: ['view', 'controlBar'],
      rightPanel: ['instructions', 'editor', 'console']
    };
    this.controlButtons = [
      {
        toggleOn: () => console.log('running'),
        toggleOff: () => console.log('stopping'),
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
    return 'applab';
  }

  getLayout(): LabLayout {
    return this.layout;
  }

  getType(): AppType {
    return 'Applab';
  }

  getControlButtons(): ButtonConfiguration[] {
    return this.controlButtons;
  }

  getRunner(): Runner {
    throw new Error('Method not implemented.');
  }
}
