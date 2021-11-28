import { NotificationManager } from 'react-notifications';

const createNotification = (type, message) => {
  const modifiedMessage =
    message.charAt(0).toUpperCase() + message.replaceAll('_', ' ').slice(1);
  switch (type) {
    case 'info':
      NotificationManager.info(message);
      break;
    case 'success':
      NotificationManager.success('Success message', modifiedMessage);
      break;
    case 'warning':
      NotificationManager.warning('NETWORK ERROR', modifiedMessage, 2000);
      break;
    case 'error':
      NotificationManager.error(modifiedMessage, 'Error', 3000, () => {});
      break;
    default:
      break;
  }
};

export default createNotification;
