import React from 'react';
import {useSelector} from 'react-redux';
import DataEditor from './DataEditor';
import DesignEditor from './DesignEditor';
import Droplet from './droplet/Droplet';
import {DropletWrapper} from './droplet/DropletWrapper';

interface ApplabEditorProps {
  dropletWrapper: DropletWrapper;
}

const ApplabEditor = ({dropletWrapper}: ApplabEditorProps) => {
  const currentMode = useSelector((state: any) => state.applabV2.currentMode);

  let editor: JSX.Element;

  if (currentMode === 'code') {
    editor = <Droplet droplet={dropletWrapper} />;
  } else if (currentMode === 'design') {
    editor = <DesignEditor />;
  } else {
    editor = <DataEditor />;
  }

  return editor;
};

export default ApplabEditor;
