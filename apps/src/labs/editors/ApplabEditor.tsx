import React from 'react';
import {useSelector} from 'react-redux';
import {ApplabState} from '../reduxStore/applabSlice';
import DataEditor from './DataEditor';
import DesignEditor from './DesignEditor';
import Droplet from './Droplet';

const ApplabEditor = () => {
  const currentMode = useSelector((state: ApplabState) => state.currentMode);

  let editor: JSX.Element;

  if (currentMode === 'code') {
    editor = <Droplet />;
  } else if (currentMode === 'design') {
    editor = <DesignEditor />;
  } else {
    editor = <DataEditor />;
  }

  return {editor};
};

export default ApplabEditor;
