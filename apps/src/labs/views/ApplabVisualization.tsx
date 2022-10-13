import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setMode} from '../reduxStore/applabSlice';

const ApplabVisualization = () => {
  const currentMode = useSelector((state: any) => state.applabV2.currentMode);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="modeButtonRow">
        <button
          onClick={() => dispatch(setMode('code'))}
          disabled={currentMode === 'code'}
          type="button"
        >
          Code Mode
        </button>
        <button
          onClick={() => dispatch(setMode('design'))}
          disabled={currentMode === 'design'}
          type="button"
        >
          Design Mode
        </button>
        <button
          onClick={() => dispatch(setMode('data'))}
          disabled={currentMode === 'data'}
          type="button"
        >
          Data Mode
        </button>
      </div>
      <div>App Lab</div>
    </div>
  );
};

export default ApplabVisualization;
