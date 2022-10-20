const droplet = require('../../../../lib/droplet/droplet-full');

export class DropletWrapper {
  container: HTMLElement;
  editor: any; // TODO: wrap droplet.Editor in a type?

  constructor() {
    this.container = document.createElement('div');
  }

  getEditor(): any {
    if (!this.editor) {
      this.setEditor();
    }
    return this.editor;
  }

  getEditorContents(): string {
    return this.editor.getCode();
  }

  setEditorContents(contents: string): void {
    this.editor.setCode(contents);
  }

  setEditor() {
    this.editor = new droplet.Editor(this.container, {
      mode: 'javascript',
      palette: [loopsCategory]
    });
  }

  render(ref: HTMLDivElement) {
    ref.appendChild(this.container);

    if (!this.editor) {
      this.setEditor();
    }

    // TODO: clean this up
    // If editor is hidden and screen is resized OR editor is resized
    // via PanelManager (i.e., Window resize event isn't triggered),
    // we have to manually trigger resize event.
    this.editor.resize();
  }
}

// TODO: make blocks/categories configurable
const forBlock: DropletBlock = {
  block: 'for (var i = 0; i < 4; i++) {\n  __;\n}',
  title: 'repeat some code'
};

const loopsCategory: DropletCategory = {
  name: 'loops',
  color: 'blue',
  blocks: [forBlock]
};

type DropletBlock = {
  block: string;
  title: string;
};

type DropletCategory = {
  name: string;
  color: string;
  blocks: DropletBlock[];
};
