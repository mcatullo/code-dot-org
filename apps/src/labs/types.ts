import {CodeMirrorWrapper} from './editors/codemirror/CodeMirrorWrapper';
import {DropletWrapper} from './editors/droplet/DropletWrapper';

export type Editor = CodeMirrorWrapper | DropletWrapper;

export interface Lab {
  editor: Editor;
  hasConsole: boolean;
  view: ViewType;
  layout: LabLayout;
  type: AppType;
}

export class Applab implements Lab {
  editor: DropletWrapper;
  hasConsole = true;
  view: AppLabView;
  layout: LabLayout;
  type: AppType;

  constructor() {
    this.editor = new DropletWrapper();
    this.view = 'applab';
    this.layout = {
      leftPanel: ['view'],
      rightPanel: ['instructions', 'editor', 'console']
    };
    this.type = 'Applab';
  }
}

export class Javalab implements Lab {
  editor: CodeMirrorWrapper;
  hasConsole = true;
  view: JavalabView;
  layout: LabLayout;
  type: AppType;

  constructor(viewType: JavalabView) {
    this.editor = new CodeMirrorWrapper();
    this.view = viewType;
    this.layout = {
      leftPanel: ['instructions', 'view'],
      rightPanel: ['editor', 'console']
    };
    this.type = 'Javalab';
  }
}

export type ViewType = JavalabView | AppLabView;

export type JavalabView = 'neighborhood' | 'console' | 'theater';

export type AppLabView = 'applab';

export interface LabLayout {
  leftPanel: Array<LabComponent>;
  rightPanel: Array<LabComponent>;
}

export type LabComponent = 'editor' | 'console' | 'view' | 'instructions';

export type Level = AppLabLevel | JavaLabLevel;

export type AppType = 'Javalab' | 'Applab';

export interface AppLabLevel extends CommonLevelProperties {
  type: 'Applab';
  designModeAtStart: boolean;
  hideDesignMode: boolean;
}

export interface JavaLabLevel extends CommonLevelProperties {
  type: 'Javalab';
  csaViewMode: JavalabView;
}

export interface CommonLevelProperties {
  name: string;
  published: boolean;
  longInstructions: string;
  miniRubric: boolean;
  startSources: {
    [filename: string]: {
      text: String;
      isVisible: boolean;
      isValidation: boolean | undefined;
    };
  };
  submittable: boolean;
}

export interface RawLevel {
  properties: LevelProperties;
  name: string;
  published: boolean;
  type: AppType;
}

export interface LevelProperties {
  encrypted: trueFalseString;
  long_instructions: string;
  csa_view_mode: 'console' | 'neighborhood' | 'theater' | undefined;
  mini_rubric: trueFalseString;
  start_sources: {
    [filename: string]: {
      text: String;
      isVisible: boolean;
      isValidation: boolean | undefined;
    };
  };
  submittable: trueFalseString;
  design_mode_at_start: trueFalseString | undefined;
  hide_design_mode: trueFalseString | undefined;
}

type trueFalseString = 'true' | 'false';
