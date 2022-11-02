import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CommonState {
  consoleLogs: Array<string>;
  isRunning: boolean;
}

const initialState: CommonState = {
  consoleLogs: [],
  isRunning: false
};

export const commonSlice = createSlice({
  name: 'labs',
  initialState: initialState,
  reducers: {
    appendConsoleLog: (state, action: PayloadAction<string>) => {
      state.consoleLogs.push(action.payload);
    },
    resetConsoleLogs: state => {
      state.consoleLogs = [];
    },
    setIsRunning: (state, action: PayloadAction<boolean>) => {
      state.isRunning = action.payload;
    }
  }
});

export const {
  appendConsoleLog,
  resetConsoleLogs,
  setIsRunning
} = commonSlice.actions;

export default commonSlice.reducer;
