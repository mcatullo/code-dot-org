import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type ApplabMode = 'design' | 'code' | 'data';

export interface ApplabState {
  currentMode: ApplabMode;
}

const initialState: ApplabState = {
  currentMode: 'code'
};

export const applabSlice = createSlice({
  name: 'applabV2',
  initialState: initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<ApplabMode>) => {
      state.currentMode = action.payload;
    }
  }
});

export default applabSlice.reducer;
