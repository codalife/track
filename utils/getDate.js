import { DatePickerAndroid } from 'react-native';

async function getDate(callback) {
  try {
    const { action, year, month, day } = await DatePickerAndroid.open({
      date: new Date(),
    });
    if (action !== DatePickerAndroid.dismissedAction) {
      callback(year, month, day);
    }
  } catch ({ code, message }) {
    console.warn('Cannot open date picker', message);
  }
}

export default getDate;
