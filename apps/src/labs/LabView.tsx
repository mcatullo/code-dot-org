import React, { FunctionComponent } from 'react';
const getScriptData = require('../util/getScriptData');

// ingest appOptions from backend into AppOptions type
const LabView = () => {
  const appOptions = getScriptData('appoptions');
  console.log(appOptions);
  const level = getScriptData('level');
  console.log(level);

  return <div>Hello from lab lab</div>
}

export default LabView