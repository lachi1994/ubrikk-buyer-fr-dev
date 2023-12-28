import { useDispatch } from 'react-redux';
import { RefreshToken } from 'redux/features/auth';

const useRefreshToken = () => {
	const dispatch = useDispatch();

	const refresh = async () => {
		const res = await dispatch(RefreshToken());
		return res.payload.token;
	};

	return refresh;
};

export default useRefreshToken;
