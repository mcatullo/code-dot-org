import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {getStore} from '../../../../code-studio/redux';
import LabView from '../../../../labs/LabView';
import {
  convertLevel,
  getLabForLevel
} from '../../../../labs/middleware/labHelpers';
import getScriptData from '../../../../util/getScriptData';

$(document).ready(function() {
  const level = getScriptData('level');
  const convertedLevel = convertLevel(level);
  const lab = getLabForLevel(convertedLevel);
  // const appOptions = getScriptData('appOptions');
  // console.log(appOptions);

  ReactDOM.render(
    <Provider store={getStore()}>
      <LabView lab={lab} level={convertedLevel} />
    </Provider>,
    document.getElementById('lab-container')
  );
});
