import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadingState, LoginUser } from 'redux/features/auth';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import './Style.css';

import Bg2 from '../../assets/img/bg2.png';
import { toast } from 'react-toastify';

function Signin() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { state } = useLocation();
	const isLoading = useSelector(loadingState);
	const [formValues, setValues] = useState({ email: '', password: '' });

	const onChange = (e) => setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!formValues.email || !formValues.password) toast.warn('Please provide all fields');
		const res = await dispatch(LoginUser(formValues));
		!res.error &&
			navigate(
				!state || state?.from.pathname === '/' || state?.from?.pathname === '/register'
					? '/profile'
					: state?.from,
				{
					replace: true,
				}
			);
	};

	useEffect(() => {
		return () => setValues({ email: '', password: '' });
	}, []);

	return isLoading ? (
		<p>Loading...</p>
	) : (
		<div className='sign-main-div'>
			<div className='img-div'>
				<img src={Bg2} alt='error' className='signin-image'/>
			</div>

			<div className='body-content'>
				<h4>Welcome Back</h4>
				<b>Pick up from where you left</b> <br />
				<br />
				<br />
				<form onSubmit={onSubmit}>
					<label>
						Email <br />
						<input
							type='email'
							name='email'
							placeholder='eg abc@example.com'
							value={formValues.email}
							onChange={onChange}
						/>
					</label>
					<br />
					<br />
					<label>
						Password <br />
						<input
							type='password'
							name='password'
							placeholder='***********'
							value={formValues.password}
							onChange={onChange}
						/>
					</label>
					<br />
					<br />
					<br />
					<button type='submit'>Login</button> <br />
					<br />
					<br />
				</form>
				<div>
					<span>Or signin with </span>
					<BsFacebook className='icon' />
					<AiFillTwitterCircle className='icon' />
					<AiFillInstagram className='icon' />
				</div>
				<br />
				<br />
				<br />
				<b style={{ textAlign: 'center' }}>
					Don't have an account? <Link to='/signup'>Create one Here</Link>
				</b>
			</div>
		</div>
	);
}

export default Signin;
