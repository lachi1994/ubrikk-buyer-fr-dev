import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useRefreshToken from 'hooks/use-refresh-token';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/features/auth';
import { PERSIST_NAME } from 'config/data';

const PersistLogin = () => {
	const [isLoading, setisLoading] = useState(true);
	const user = useSelector(getUser);
	const refresh = useRefreshToken();
	const persist = localStorage.getItem(PERSIST_NAME);

	useEffect(() => {
		const verifyRefreshToken = async () => {
			try {
				await refresh();
			} catch (err) {
				console.error(err);
			} finally {
				setisLoading(false);
			}
		};

		!user && persist ? verifyRefreshToken() : setisLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return isLoading ? <p>Loading...</p> : <Outlet />;
};

export default PersistLogin;
