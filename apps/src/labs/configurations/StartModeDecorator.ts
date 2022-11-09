import {StartModeJavaRunner} from '../runners/JavaRunner';
import {Lab, Runner} from '../types';
import {LabDecorator} from './LabDecorator';

export class StartModeDecorator extends LabDecorator {
  runner: Runner;

  constructor(lab: Lab) {
    super(lab);
    // can we do overrides like this for everything start mode requires?
    // turn off autosave, override asset upload url--> probably
    // add header bar --> maybe goes somewhere else??
    if (super.getType() === 'Javalab') {
      this.runner = new StartModeJavaRunner();
    } else {
      this.runner = super.getRunner();
    }
  }

  getRunner(): Runner {
    return this.runner;
  }
}
