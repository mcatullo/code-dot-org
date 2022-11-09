import {StartModeJavaRunner} from '../runners/JavaRunner';
import {ButtonConfiguration, Lab, Runner} from '../types';
import {LabDecorator} from './LabDecorator';

export class StartModeDecorator extends LabDecorator {
  runner: Runner;
  controlButtons: Array<ButtonConfiguration>;

  constructor(lab: Lab) {
    super(lab);
    // can we do overrides like this for everything start mode requires?
    // turn off autosave, override asset upload url--> probably
    // add header bar --> maybe goes somewhere else??
    // Todo: can we move this out of the constructor??
    if (super.getType() === 'Javalab') {
      this.runner = new StartModeJavaRunner();
    } else {
      this.runner = super.getRunner();
    }
    this.controlButtons = [
      {
        toggleOn: this.runner.onRun,
        toggleOff: this.runner.onStop,
        toggleOnText: 'run',
        toggleOffText: 'stop',
        onIcon: undefined,
        offIcon: undefined,
        type: 'run'
      }
    ];
  }

  getRunner(): Runner {
    return this.runner;
  }

  getControlButtons(): ButtonConfiguration[] {
    return this.controlButtons;
  }
}
