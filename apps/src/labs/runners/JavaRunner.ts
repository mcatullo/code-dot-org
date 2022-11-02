import {appendConsoleLog, setIsRunning} from '../reduxStore/commonSlice';
const {getStore} = require('@cdo/apps/redux');

export default class JavaRunner {
  run() {
    const store = getStore();
    store.dispatch(setIsRunning(true));
    store.dispatch(appendConsoleLog('I ran a Java program!'));
  }

  stop() {
    const store = getStore();
    store.dispatch(appendConsoleLog('I stopped a Java program!'));
    store.dispatch(setIsRunning(false));
  }
}
