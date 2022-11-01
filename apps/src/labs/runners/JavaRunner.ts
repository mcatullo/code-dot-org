import {appendConsoleLog} from '../reduxStore/commonSlice';
const {getStore} = require('@cdo/apps/redux');

export default class JavaRunner {
  run() {
    const store = getStore();
    store.dispatch(appendConsoleLog('I ran a Java program!'));
  }
}
