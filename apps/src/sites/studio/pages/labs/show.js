import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {getStore} from '@cdo/apps/redux';
import getScriptData from '../../../../util/getScriptData';
import initLab from '../../../../labs/LabManager';

$(document).ready(function() {
  const level = getScriptData('level');
  // const appOptions = getScriptData('appOptions');
  // console.log(appOptions);
  const labView = initLab(level);

  ReactDOM.render(
    <Provider store={getStore()}>{labView}</Provider>,
    document.getElementById('lab-container')
  );
});
