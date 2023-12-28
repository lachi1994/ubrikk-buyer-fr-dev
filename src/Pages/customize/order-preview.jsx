import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { getCustomization } from 'redux/features/order';

const OrderPreview = (props) => {
	const { design, material } = useSelector(getCustomization);
	const service = useSelector((state) => state.order.service);

	const imageStyle = {
		width: `${material?.size.split('x')[0]}px`,
		height: `${material?.size.split('x')[1] / 1.5}px`,
		objectPosition: '10% auto',
		objectFit: 'contain',
	};

	return (
		<>
			<Modal {...props}>
				<Modal.Header closeButton>
					<Modal.Title>Preview {service}</Modal.Title>
				</Modal.Header>
				<Modal.Body className='shadow-lg bg-white w-100 p-3 flex-grow-1 d-flex justify-content-center align-items-center'>
					<img src={design.url} alt={service} className='img-fluid' style={imageStyle} />
				</Modal.Body>
				<Modal.Footer>
					<Button as={Link} to='/checkout' variant='primary'>
						Checkout
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default OrderPreview;
