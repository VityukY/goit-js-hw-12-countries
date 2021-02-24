import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButton from 'pnotify/dist/es/PNotifyButtons';
import 'pnotify/dist/PNotifyBrightTheme.css';

const clarifyMessage = () => {
  PNotify.alert({
    title: 'Attention!',
    text: 'Please clarify your request ',
    delay: 1000,
  });
};
const errorMessage = () => {
  PNotify.alert({
    title: 'Attention!',
    text: 'There is no such country',
    delay: 1000,
  });
};
export { clarifyMessage, errorMessage };
