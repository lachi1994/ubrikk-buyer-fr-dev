import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadingState, RegisterUser } from 'redux/features/auth';

import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import './Style.css';

import Mask from '../../assets/img/Mask.png';
import { toast } from 'react-toastify';


const defaultValues = { full_name: '', email: '', password: '' };

function Signup() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { state } = useLocation();
	const isLoading = useSelector(loadingState);
	const [formValues, setValues] = useState(defaultValues);
	const [agreed, setAgreed] = useState(false);

	const onChange = (e) => setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

	const onChecked = (e) => setAgreed(e.target.checked);

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!formValues.email || !formValues.full_name || !formValues.password)
			return toast.warning('Please fill all fields');
		if (!agreed) return toast.warn('Read terms and conditions and check checkbox');
		const res = await dispatch(RegisterUser(formValues));
		!res.error &&
			navigate(
				!state || state?.from.pathname === '/' || state?.from?.pathname === '/login'
					? '/profile'
					: state?.from,
				{ replace: true }
			);
	};

	useEffect(() => {
		return () => setValues(defaultValues);
	}, []);

	return isLoading ? (
		<p>Loading...</p>
	) : (
		<div className='sign-main-div'>
			<div className='img-div'>
				<img src={Mask} alt='error' />
			</div>

			<div className='body-content'>
				<h4>Join Us</h4>
				<b>Create an account to finish customizing your product and place your order</b>
				<br />
				<br />
				<form onSubmit={onSubmit}>
					<label>
						Name <br />
						<input
							type='text'
							name='full_name'
							value={formValues.full_name}
							onChange={onChange}
							placeholder='eg Kumar Jhon'
						/>
					</label>
					<br />
					<br />
					<label>
						Email <br />
						<input
							type='email'
							name='email'
							value={formValues.email}
							onChange={onChange}
							placeholder='eg abc@example.com'
						/>
					</label>
					<br />
					<br />
					<label>
						Password <br />
						<input
							type='password'
							placeholder='***********'
							name='password'
							value={formValues.password}
							onChange={onChange}
						/>
					</label>
					<br />
					<br />
					<label>
				      Comfrim Password<br />
					   <input
						    type='Re-type Password'
							 placeholder='re-enter your password'
							 name='Re-type Passrord'
							 value={formValues.same}
							 onChange={onChange}
							 />
					   </label>
					<br />
					<br />
					<label className='checkbox-input'>
						<input
							type='checkbox'
							name='agreed'
							id='agreeed'
							checked={agreed}
							onChange={onChecked}
						/>{' '}
						<span>
							I agree to Ubrikk's &nbsp;
							<Link to='/terms'> terms </Link> &nbsp;and &nbsp;
							<Link to='/conditions'> Conditions </Link>&nbsp;
						</span>
					</label>
					<br />
					<button>Create Account</button> 
					<br />
					<br />
				</form>
				<div>
				<span style={{ textAlign: 'center' }}>  Or Signup With</span>
				<br />
				<br />
					</div>
					<div>
					<BsFacebook className='icon' />
					<AiFillTwitterCircle className='icon' />
					<AiFillInstagram className='icon' />
				</div>
				<br />
				<b style={{ textAlign: 'center' }}>
					Already have an account? <Link to='/signin'>Login Here</Link>
				</b>
				<br />
			</div>
		</div>
	);
}

export default Signup;
