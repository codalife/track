import { Notifications } from 'expo';

const schedulingOptions = {
  time: new Date().getSeconds() + 1000,
  repeat: 'minute',
};

const localNotification = {
  title: 'test',
  body: 'testing local notification',
};

const createNotification = () => {
  console.log('schefuling delayed notification');
  return Notifications.scheduleLocalNotificationAsync(
    localNotification,
    schedulingOptions,
  );
};

const sendDelayedNotification = () => {
  const schedulingOptions = {
    time: new Date().getTime() + 1000,
    repeat: 'minute',
  };

  const localNotification = {
    title: 'test',
    body: 'testing local notification',
    data: {
      hooray: 'it worked',
    },
  };

  console.log('scheduling DELAYED notification');
  Notifications.scheduleLocalNotificationAsync(
    localNotification,
    schedulingOptions,
  );
};

export default createNotification;
