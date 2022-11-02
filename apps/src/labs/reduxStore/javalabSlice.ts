import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface JavalabState {
  sources: {
    [filename: string]: {
      text: string;
      isVisible: boolean;
      isValidation: boolean | undefined;
      tabOrder: number;
    };
  };
}

const initialState: JavalabState = {
  sources: {
    'MyClass.java': {
      text: '',
      tabOrder: 0,
      isVisible: true,
      isValidation: false
    }
  }
};

export const javalabSlice = createSlice({
  name: 'javalabV2',
  initialState: initialState,
  reducers: {
    setSourceText: (state, action: PayloadAction<string>) => {
      state.sources['MyClass.java'].text = action.payload;
    }
  }
});

export const {setSourceText} = javalabSlice.actions;

export default javalabSlice.reducer;
