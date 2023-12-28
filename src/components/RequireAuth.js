import { useSelector } from 'react-redux';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { getUser } from 'redux/features/auth';

const RequireAuth = ({ permissions }) => {
	const user = useSelector(getUser);
	const location = useLocation();

	return permissions.includes(user?.role) ? (
		<Outlet />
	) : user ? (
		<Navigate to='/unathorized' state={{ from: location }} replace />
	) : (
		<Navigate to='/signin' state={{ from: location }} replace />
	);
};

export default RequireAuth;
