

interface Editor {
  run: () => String
}

class CodeMirror implements Editor {
  run() {
    return 'codemirror'
  }
}

class Droplet implements Editor {
  run() {
    return 'droplet'
  }
}

interface Lab {
  editor: Editor,
  hasConsole: boolean,
  view: ViewType,
  layout: LabLayout
}

class Applab implements Lab {
  editor: Editor;
  hasConsole = true;
  view: AppLabView;
  layout: LabLayout;

  constructor() {
    this.editor = new Droplet();
    this.view = 'app';
    this.layout = {leftPanel: ['view'], rightPanel:['instructions', 'editor', 'console']};
  }
}

class Javalab implements Lab {
  editor: Editor;
  hasConsole = true;
  view: JavalabView;
  layout: LabLayout;

  constructor(viewType: JavalabView) {
    this.editor = new CodeMirror();
    this.view = viewType;
    this.layout = {leftPanel: ['instructions', 'view'], rightPanel:['editor', 'console']};
  }
}

type ViewType = JavalabView | AppLabView;

type JavalabView = 'neighborhood' | 'console' | 'theater';

type AppLabView = 'app';

interface AppOptions {

}

interface LabLayout {
  leftPanel: Array<LabComponent>;
  rightPanel: Array<LabComponent>;
}

type LabComponent = 'editor' | 'console' | 'view' | 'instructions';