import {
  AppType,
  ButtonConfiguration,
  Editor,
  Lab,
  LabLayout,
  Runner,
  ViewType
} from '../types';

export class LabDecorator implements Lab {
  lab: Lab;

  constructor(lab: Lab) {
    this.lab = lab;
  }

  getEditor(): Editor {
    return this.lab.getEditor();
  }

  hasConsole(): boolean {
    return this.lab.hasConsole();
  }

  getView(): ViewType {
    return this.lab.getView();
  }

  getLayout(): LabLayout {
    return this.lab.getLayout();
  }

  getType(): AppType {
    return this.lab.getType();
  }

  getControlButtons(): ButtonConfiguration[] {
    return this.lab.getControlButtons();
  }

  getRunner(): Runner {
    return this.lab.getRunner();
  }
}
