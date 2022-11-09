import {appendConsoleLog, setIsRunning} from '../reduxStore/commonSlice';
import {Runner} from '../types';
const {getStore} = require('@cdo/apps/redux');

export default class JavaRunner implements Runner {
  onRun() {
    const store = getStore();
    store.dispatch(setIsRunning(true));
    store.dispatch(appendConsoleLog('I ran a Java program!'));
  }

  onStop() {
    const store = getStore();
    store.dispatch(appendConsoleLog('I stopped a Java program!'));
    store.dispatch(setIsRunning(false));
  }
}

export class StartModeJavaRunner implements Runner {
  onRun(): void {
    const store = getStore();
    store.dispatch(setIsRunning(true));
    store.dispatch(appendConsoleLog('I ran a Java program in start mode!'));
  }
  onStop(): void {
    const store = getStore();
    store.dispatch(appendConsoleLog('I stopped a Java program in start mode!'));
    store.dispatch(setIsRunning(false));
  }
}
