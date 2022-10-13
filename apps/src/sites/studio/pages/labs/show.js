import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {getStore} from '@cdo/apps/redux';
import {
  convertLevel,
  getLabForLevel
} from '../../../../labs/middleware/labHelpers';
import getScriptData from '../../../../util/getScriptData';
import initLab from '../../../../labs/LabManager';

$(document).ready(function() {
  const level = getScriptData('level');
  const convertedLevel = convertLevel(level);
  const lab = getLabForLevel(convertedLevel);
  // const appOptions = getScriptData('appOptions');
  // console.log(appOptions);
  const labView = initLab(lab, convertedLevel);

  ReactDOM.render(
    <Provider store={getStore()}>{labView}</Provider>,
    document.getElementById('lab-container')
  );
});
