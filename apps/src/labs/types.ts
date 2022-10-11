

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
  level: Level
}

class Applab implements Lab {
  editor: Editor

  constructor() {
    this.editor = new Droplet()
  }
}

class Javalab implements Lab {
  editor: Editor

  constructor() {
    this.editor = new CodeMirror()
  }
}

interface Level {
  
}