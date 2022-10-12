
export type Editor = 'CodeMirror' | 'Droplet';

export interface Lab {
  editor: Editor,
  hasConsole: boolean,
  view: ViewType,
  layout: LabLayout
}

export class Applab implements Lab {
  editor: Editor;
  hasConsole = true;
  view: AppLabView;
  layout: LabLayout;

  constructor() {
    this.editor = 'Droplet';
    this.view = 'applab';
    this.layout = {leftPanel: ['view'], rightPanel:['instructions', 'editor', 'console']};
  }
}

export class Javalab implements Lab {
  editor: Editor;
  hasConsole = true;
  view: JavalabView;
  layout: LabLayout;

  constructor(viewType: JavalabView) {
    this.editor = 'CodeMirror';
    this.view = viewType;
    this.layout = {leftPanel: ['instructions', 'view'], rightPanel:['editor', 'console']};
  }
}

export type ViewType = JavalabView | AppLabView;

export type JavalabView = 'neighborhood' | 'console' | 'theater';

export type AppLabView = 'applab';

interface AppOptions {

}

export interface LabLayout {
  leftPanel: Array<LabComponent>;
  rightPanel: Array<LabComponent>;
}

export type LabComponent = 'editor' | 'console' | 'view' | 'instructions';

export type Level = AppLabLevel | JavaLabLevel;

export interface AppLabLevel extends CommonLevelProperties {
  type: 'Applab'
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
    [filename: string]: {text: String, isVisible: boolean, isValidation: boolean | undefined}
  };
  submittable: boolean;
}

export interface RawLevel {
  properties: LevelProperties;
  name: string;
  published: boolean;
  type: 'Javalab' | 'Applab';
}

export interface LevelProperties {
  encrypted: 'true' | 'false';
  long_instructions: string;
  csa_view_mode: 'console' | 'neighborhood' | 'theater' | undefined;
  mini_rubric: 'true' | 'false';
  start_sources: {
    [filename: string]: {text: String, isVisible: boolean, isValidation: boolean | undefined}
  };
  submittable: 'true' | 'false';
}