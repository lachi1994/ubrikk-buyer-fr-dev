import { useSelector } from 'react-redux';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { getUser } from 'redux/features/auth';

const AlreadyAuth = () => {
	const user = useSelector(getUser);
	const { state } = useLocation();

	return user ? <Navigate to={!state ? '/' : state.from.pathname} /> : <Outlet />;
};

export default AlreadyAuth;
