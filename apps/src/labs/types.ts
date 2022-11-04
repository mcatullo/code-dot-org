import {CodeMirrorWrapper} from './editors/codemirror/CodeMirrorWrapper';
import {DropletWrapper} from './editors/droplet/DropletWrapper';
import {ApplabState} from './reduxStore/applabSlice';
import {CommonState} from './reduxStore/commonSlice';
import {JavalabState} from './reduxStore/javalabSlice';
import JavaRunner from './runners/JavaRunner';

export type Editor = CodeMirrorWrapper | DropletWrapper;

export interface Lab {
  editor: Editor;
  hasConsole: boolean;
  view: ViewType;
  layout: LabLayout;
  type: AppType;
  runButton: RunButton;
  controlButtons: Array<ControlButton>;
}

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

export type ViewType = JavalabView | AppLabView;

export type JavalabView = 'neighborhood' | 'console' | 'theater';

export type AppLabView = 'applab';

export interface LabLayout {
  leftPanel: Array<LabComponent>;
  rightPanel: Array<LabComponent>;
}

export type LabComponent =
  | 'editor'
  | 'console'
  | 'view'
  | 'instructions'
  | 'controlBar';

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

type ControlButton = 'run';

interface RunButton {
  onRun: () => void;
  onStop: () => void;
  runText: string;
  stopText: string;
}

export interface ReduxStore {
  applabV2: ApplabState;
  javalabV2: JavalabState;
  labs: CommonState;
}

export interface AppOptions {
  app: 'javalab' | 'applab';
  authoredHintViewRequestsUrl: string;
  backpackChannel: string;
  backpackEnabled: boolean;
  baseUrl: string;
  callouts: Array<string>;
  channel: string;
  dialog: any;
  displayTheme: 'light' | 'dark' | undefined;
  experiments: Array<string>;
  hasContainedLevels: boolean;
  hasOpenCodeReview: boolean;
  is13Plus: boolean;
  isViewingOwnProject: boolean;
  level: any;
  levelRequiresChannel: boolean;
  muteMusic: boolean;
  postMilestoneMode: string;
  puzzleRatingsUrl: string;
  reduceChannelUpdates: boolean;
  report: any;
  serverLevelId: number;
  teacherMarkdown: string;
  textToSpeechEnabled: boolean;
  userId: number;
  userSharingDisabled: boolean;
  usngTextModePref: boolean;
}
