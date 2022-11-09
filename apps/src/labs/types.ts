import {CodeMirrorWrapper} from './editors/codemirror/CodeMirrorWrapper';
import {DropletWrapper} from './editors/droplet/DropletWrapper';
import {ApplabState} from './reduxStore/applabSlice';
import {CommonState} from './reduxStore/commonSlice';
import {JavalabState} from './reduxStore/javalabSlice';
export type Editor = CodeMirrorWrapper | DropletWrapper;

export interface Lab {
  getEditor(): Editor;
  hasConsole(): boolean;
  getView(): ViewType;
  getLayout(): LabLayout;
  getType(): AppType;
  getControlButtons(): Array<ButtonConfiguration>;
  getRunner(): Runner;
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

export interface ButtonConfiguration {
  toggleOn: () => void;
  toggleOff: () => void;
  toggleOnText: string;
  toggleOffText: string;
  onIcon: string | undefined;
  offIcon: string | undefined;
  type: 'run' | 'other';
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
  isStartMode: boolean;
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

export interface Runner {
  onRun(): void;
  onStop(): void;
}
