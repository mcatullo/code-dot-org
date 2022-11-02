import React, {useEffect, useRef} from 'react';
import {EditorView} from '@codemirror/view';
import {java} from '@codemirror/lang-java';
import {useDispatch, useSelector} from 'react-redux';
import {setSourceText} from '../../reduxStore/javalabSlice';
import {EditorState, Transaction} from '@codemirror/state';
import {editorSetup} from './editorSetup';
import {ReduxStore} from '../../types';

const CodeMirror = () => {
  const dispatch = useDispatch();
  const sources = useSelector((state: ReduxStore) => state.javalabV2.sources);
  const codeMirrorInstance = useRef<HTMLDivElement>(null);

  let editorInstance: EditorView;

  useEffect(() => {
    if (codeMirrorInstance.current) {
      createEditor(codeMirrorInstance.current);
    }
  }, [codeMirrorInstance]);

  function createEditor(ref: HTMLDivElement) {
    if (!editorInstance) {
      const doc = sources['MyClass.java'].text;
      const extensions = [...editorSetup];

      // use Java language
      extensions.push(java());

      console.log(codeMirrorInstance.current);
      editorInstance = new EditorView({
        state: EditorState.create({
          doc: doc,
          extensions: extensions
        }),
        parent: ref,
        dispatch: dispatchEditorChange()
      });
    }
  }

  function dispatchEditorChange() {
    // tr is a code mirror transaction
    // see https://codemirror.net/6/docs/ref/#state.Transaction
    return (tr: Transaction) => {
      // we are overwriting the default dispatch method for codemirror,
      // so we need to manually call the update method.
      editorInstance.update([tr]);
      // if there are changes to the editor, update redux.
      if (!tr.changes.empty && tr.newDoc) {
        dispatch(setSourceText(tr.newDoc.toString()));
      }
    };
  }

  return <div ref={codeMirrorInstance} className="codemirror-container" />;
  //<div className="editor">This is code mirror!</div>;
};

export default CodeMirror;

/*
  useEffect(() => {
    if (ref.current) {
      droplet.render(ref.current);
    }
  }, [ref, droplet]);*/
