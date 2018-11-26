import { Notifications } from 'expo';

const schedulingOptions = {
  time: new Date().getTime() + 1000,
  repeat: 'minute',
};

const localNotification = {
  title: 'test',
  body: 'testing local notification',
};

const createNotification = () => {
  return Notifications.scheduleLocalNotificationAsync(
    localNotification,
    schedulingOptions,
  );
};

export default createNotification;
