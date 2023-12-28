import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from 'redux/store';
import App from './app';
import 'assets/scss/index.scss';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
			<ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} closeOnClick />
		</Provider>
	</BrowserRouter>
);
