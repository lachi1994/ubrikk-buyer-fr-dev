import { useEffect } from 'react';
import axios from 'apis/axios';
import useRefreshToken from './use-refresh-token';
import { useSelector } from 'react-redux';
import { getAcToken } from 'redux/features/auth';

const usePrivateAxios = () => {
	const rfToken = useRefreshToken();
	const acToken = useSelector(getAcToken);

	useEffect(() => {
		const requestInterceptor = axios.interceptors.request.use(
			(config) => {
				if (config.headers && !config.headers?.Authorization)
					config.headers.Authorization = `Bearer ${acToken}`;

				return config;
			},
			(error) => Promise.reject(error)
		);

		const responseInterceptor = axios.interceptors.response.use(
			(response) => response,
			async (error) => {
				const prevRequest = error?.config;
				if (error?.response?.status === 403 && !prevRequest?.sent) {
					prevRequest.sent = true;
					const newAcToken = await rfToken();
					prevRequest.headers.Authorization = `Bearer ${newAcToken}`;
					return axios(prevRequest);
				}
				return Promise.reject(error);
			}
		);

		return () => {
			axios.interceptors.request.eject(requestInterceptor);
			axios.interceptors.response.eject(responseInterceptor);
		};
	}, [acToken, rfToken]);

	return axios;
};

export default usePrivateAxios;
