import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButton from 'pnotify/dist/es/PNotifyButtons';
import 'pnotify/dist/PNotifyBrightTheme.css';

const errorMessage = () => {
  PNotify.alert({
    title: 'Attention!',
    text: 'Please clarify your request ',
    delay: 3000,
  });
};
export { errorMessage };
