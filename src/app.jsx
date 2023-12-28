import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './Pages/landing/Landing';
import LandingPage from './Pages/landing/Landingpage';

import CustomizeV2 from './Pages/customize/customize-v2';
import CustomizeCar from './Pages/customize/customize-car';

import Signin from './Pages/Auth/Signin';
import Signup from './Pages/Auth/Signup';

import Home from './Pages/Profile/Home/Home';

import Orders from './Pages/Profile/Orders/Orders';
import NoOrders from './Pages/Profile/Noorders/NoOrders';
import Drafts from './Pages/Profile/Drafts/Drafts';
import Settings from './Pages/Profile/Settings/Settings';

import SettingLayout from './Pages/Profile/Settings/SettingLayout';
import Vendorlist from './Pages/Profile/PlaceOrder/Vendorlist';

import PersistLogin from 'components/PersistLogin';
import RequireAuth from 'components/RequireAuth';
import AlreadyAuth from 'components/AlreadyAuth';

// import Payment from 'Pages/Profile/Payment/Payment';
// import OrderPreview from 'Pages/Profile/Payment/OrderPreview';
// import OrderSummary from 'Pages/Profile/Payment/OrderSummary';

import Help from 'Pages/Profile/Help/Help';
import Loader from 'Pages/landing/Loader';


const App = () => {
	React.useEffect(() => {
		if (process.env.NODE_ENV !== 'development') {
			const script1 = document.createElement('script');
			script1.src = `https://www.googletagmanager.com/gtag/js?id=G-HHTT66KKYF`;
			script1.async = true;

			const script2 = document.createElement('script');
			script2.innerHTML = `
				window.dataLayer = window.dataLayer || [];
				function gtag(){
					dataLayer.push(arguments);
				}
				gtag('js', new Date());
				gtag('config', 'G-HHTT66KKYF');
			`;
			document.body.appendChild(script1);
			document.body.appendChild(script2);
		}
	}, []);

	return (
		<Routes>
			{/* pages that require persiting login */}
			<Route element={<PersistLogin />}>
				{/* public pages */}

				<Route path='/' element={<Landing />} />
				<Route path='landingpage' element={<LandingPage />} />
				<Route path='customize' element={<CustomizeV2 />} />
				<Route path='customizeCar' element={<CustomizeCar />} />
						
				<Route path='profile' element={<Home />} />
				<Route path='drafts' element={<Drafts />} />
					<Route path='order' element={<Orders />} />
					<Route path='noorder' element={<NoOrders />} />
					<Route path='help' element={<Help />} />
					<Route path='vendorlist' element={<Vendorlist />} />
					<Route path='settings' element={<Settings />}>
						<Route index element={<SettingLayout />} />
			</Route>
				{/* pages that require authentication */}
				<Route element={<RequireAuth permissions={[2001]} />}>
			
			{/* <Route path='pay' element={<Payment/>}/>
			<Route path='preview' element={<OrderPreview/>}/>
			<Route path='summary' element={<OrderSummary/>}/> */}
					</Route>
				</Route>

				{/* pages that should not be available if authenticated */}
				<Route element={<AlreadyAuth />}>
					<Route path='signin' element={<Signin />} />
					<Route path='signup' element={<Signup />} />
				</Route>
				<Route path='load' element={<Loader/>}/>
				
		</Routes>
	);
};

export default App;