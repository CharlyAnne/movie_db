import '@/css/globals.css';
import { Provider } from 'react-redux';
import store from '@/Redux/dstore';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
