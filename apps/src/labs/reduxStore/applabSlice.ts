import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type ApplabMode = 'design' | 'code' | 'data';

export interface ApplabState {
  currentMode: ApplabMode;
  visualizationInput: string | undefined;
}

const initialState: ApplabState = {
  currentMode: 'code',
  visualizationInput: undefined
};

export const applabSlice = createSlice({
  name: 'applabV2',
  initialState: initialState,
  reducers: {
    setMode: (state, action: PayloadAction<ApplabMode>) => {
      state.currentMode = action.payload;
    },
    setVisualizationInput: (state, action: PayloadAction<string>) => {
      state.visualizationInput = action.payload;
    }
  }
});

export const {setMode, setVisualizationInput} = applabSlice.actions;

export default applabSlice.reducer;
