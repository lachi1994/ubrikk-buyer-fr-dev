import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fabric } from 'fabric';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BiHelpCircle, BiInfoCircle } from 'react-icons/bi';

import OrderPreview from './order-preview';
import { saveCanvasState, selectObject } from 'libs/customize-v2-helper';
// import useWindowDimensions from 'hooks/use-window-dimensions';
import { getMaterialSrc } from 'libs/get-material';
import { setCustomizationUrl, setCustomizationMaterial } from 'redux/features/order';
import { useNavigate } from 'react-router-dom';
import InfoVideo from './info-video';
const INIT_SOLID_COLORS = ['#000000', '#ffffff', '#0000ff', '#14FC2B', '#ff0000'];

const formSelects = [
	{
		title: 'Car Type',
		name: 'cartype',
		options: [
			{ value: 'Sedan' },
			{ value: 'Plain Steel' },
			{ value: 'Stainless Steel' },
			{ value: 'Metal Sheet' },
			{ value: 'Plain Plastic' },
			{ value: 'ABC Plastic' },
			{ value: 'Acrylic Plastic' },
		],
	},
	{
		title: 'Gear type',
		name: 'geartype',
		options: [
			{ value: 'Manual' },
			{ value: '1.0mm' },
			{ value: '1.5mm' },
			{ value: '2.0mm' },
			{ value: '3.0mm' },
		],
	},
	{
		title: 'Mileage',
		name: 'mileage',
		options: [
			{ value: 'Km', name: 'Km' },
			{ value: '780x390', name: '3x4' },
			{ value: '780x340', name: '2x3' },
			{ value: '780x290', name: '1x3' },
			{ value: '780x240', name: '1x2' },
		],
	},
];

const CustomizeLeftPanel = (props) => {
	const dispatch = useDispatch();
	const [preview, setPreview] = React.useState('');
	const [info, setInfo] = React.useState('');
	const [stateoptions, setOptions] = React.useState({
		name: 'Plain Plastic',
		thickness: '0.5mm',
		size: '780x440',
	});

	const addText = () => {
		var canvas = props.canvas;
		var text = new fabric.Textbox('Add text', {
			fontFamily: 'Montserrat',
			left: 100,
			top: 100,
			type: 'text',
			fontSize: 24,
			width: 200,
		});
		canvas.add(text);
		canvas.setActiveObject(text);
		selectObject(canvas);
		canvas.renderAll();
	};

	const addImage = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			const canvas = props.canvas;
			fabric.Image.fromURL(reader.result, (img) => {
				img.set({ top: 50, left: 50 });
				canvas.add(img);
				canvas.setActiveObject(img);
				selectObject(canvas);
				canvas.renderAll();
			});
		};
		reader.onerror = (error) => console.log('Error: ', error);
	};

	// add shapes to canvas
	// add circle
	const addCircle = () => {
		const canvas = props.canvas;
		const circle = new fabric.Circle({
			radius: 30,
			left: 10,
			top: 10,
			strokeWidth: 2,
			stroke: '#000000',
			fill: '',
		});
		canvas.add(circle);
		canvas.setActiveObject(circle);
		selectObject(canvas);
		canvas.renderAll();
	};

	// add square
	const addSquare = () => {
		const canvas = props.canvas;
		const square = new fabric.Rect({
			width: 100,
			height: 100,
			left: 10,
			top: 10,
			strokeWidth: 2,
			stroke: '#000000',
			fill: '',
		});
		canvas.add(square);
		canvas.setActiveObject(square);
		selectObject(canvas);
		canvas.renderAll();
	};

	// add rectangle
	const addRectangle = () => {
		const canvas = props.canvas;
		const rectangle = new fabric.Rect({
			width: 250,
			height: 50,
			left: 10,
			top: 10,
			strokeWidth: 2,
			stroke: '#000000',
			fill: '',
		});
		canvas.add(rectangle);
		canvas.setActiveObject(rectangle);
		selectObject(canvas);
		canvas.renderAll();
	};

	const deleteCanvasBg = () => {
		var canvas = props.canvas;
		canvas.backgroundColor = '';
		canvas.renderAll();
		//if (!lcanvas) lcanvas = canvas;
		var objects = canvas.getObjects().filter(function (o) {
			return o.bg === true;
		});
		for (var i = 0; i < objects.length; i++) {
			canvas.remove(objects[i]);
		}
		canvas.bgsrc = '';
		canvas.bgcolor = '';
	};

	const setBGcolor = (color) => {
		deleteCanvasBg();
		var canvas = props.canvas;
		canvas.backgroundColor = color;
		canvas.renderAll();
		saveCanvasState(canvas);
	};

	const setBGimage = (src) => {
		const canvas = props.canvas;
		let bgsrc = src;
		if (bgsrc) {
			deleteCanvasBg();
			fabric.Image.fromURL(bgsrc, (bg) => {
				const canvasAspect = canvas.width / canvas.height;
				const imgAspect = bg.width / bg.height;
				let scaleFactor;
				if (canvasAspect >= imgAspect) {
					scaleFactor = (canvas.width / bg.width) * 1;
				} else {
					scaleFactor = (canvas.height / bg.height) * 1;
				}
				bg.set({
					originX: 'center',
					originY: 'center',
					opacity: 1,
					selectable: false,
					hasBorders: false,
					hasControls: false,
					hasCorners: false,
					left: canvas.width / 2,
					top: canvas.height / 2,
					scaleX: scaleFactor,
					scaleY: scaleFactor,
					strokeWidth: 0,
				});
				canvas.add(bg);
				canvas.sendToBack(bg);
				bg.bg = true;
				canvas.bgsrc = bgsrc;
				saveCanvasState(canvas);
			});
		}
	};

	const setDimensions = (dimension) => {
		var canvas = props.canvas;
		canvas.width = +dimension.split('x')[0];
		canvas.height = +dimension.split('x')[1];
		canvas.renderAll();
		props.updateState({
			canvaswidth: +dimension.split('x')[0],
			canvasheight: +dimension.split('x')[1],
		});
		saveCanvasState(canvas);
	};

	const handleOptionsChange = (e) => {
		const { value, name } = e.target;
		setOptions((prev) => ({ ...prev, [name]: value }));
		if (name === 'size') setDimensions(value);
		if (name === 'name') {
			if (!value.includes('Plastic')) setBGimage(getMaterialSrc(value));
			else setBGcolor('#ffffff');
		}
	};

	const getImage = () => {
		const canvasdata = document.getElementById('main-canvas');
		const canvasDataUrl = canvasdata.toDataURL();
		return canvasDataUrl;
	};

	const handleDone = () => {
		if (props.canvas._objects.length > 0) {
			if (props.canvas._objects.length === 1 && props.canvas._objects[0]?.bg)
				return toast.info('Canvas cannot be empty');
			else {
				dispatch(setCustomizationUrl(getImage()));
				dispatch(setCustomizationMaterial(stateoptions));
				setPreview(true);
			}
		} else {
			toast.info('Canvas cannot be empty');
		}
	};

	const handleInfo = () => {
		setInfo(true);
	};

	const navigate = useNavigate();

	const handleNavigate = () => {
		//needed index home  fix
		navigate('/');
	};

	const service = useSelector((state) => state.order.service);

	return (
		<>
			<OrderPreview show={preview} onHide={() => setPreview(false)} />
			<InfoVideo show={info} onHide={() => setInfo(false)} />

			<Card className='w-100 ' style={{ borderRadius: '20px', height: '750px' }}>
				<Card.Body className='p-3'>
					{/* <h4 className='pb-3 h5'>{service}</h4> */}
					<h4 className='pb-3 h5'>Car</h4>
					{formSelects.map(({ title, name, options }) => (
						<Form.Group key={name} controlId={name} className='mb-2'>
							<Form.Label>{title}</Form.Label>
							<Form.Select
								className='rounded-pill'
								size='sm'
								name={name}
								value={stateoptions[name]}
								onChange={handleOptionsChange}>
								{options.map(({ value, name }) => (
									<option key={value} value={value}>
										{name || value}
									</option>
								))}
							</Form.Select>
							<br />
						</Form.Group>
					))}
					{stateoptions.name.includes('Plastic') && (
						<div className='mb-2'>
							<p className='mb-1'>Plastic Color</p>
							<div className='d-flex gap-2'>
								{INIT_SOLID_COLORS.map((color) => (
									<span
										key={color}
										className='border rounded-circle'
										style={{
											cursor: 'pointer',
											height: 30,
											width: 30,
											backgroundColor: color,
										}}
										onClick={() => setBGcolor(color)}></span>
								))}
							</div>
						</div>
					)}
					<div className='mb-3'>
						<br />
						<p className='mb-1'>Add Shapes</p>
						<div className='d-flex gap-2'>
							<span
								className='bg-dark rounded-circle'
								style={{ width: 30, height: 30, cursor: 'pointer' }}
								onClick={addCircle}></span>{' '}
							&nbsp;
							<span
								className='bg-dark rounded'
								style={{ width: 30, height: 30, cursor: 'pointer' }}
								onClick={addSquare}></span>{' '}
							&nbsp;
							<span
								className='bg-dark rounded'
								style={{ width: 60, height: 30, cursor: 'pointer' }}
								onClick={addRectangle}></span>
						</div>
					</div>{' '}
					<br />
					<div className='d-flex gap-2'>
						<Button
							title='Add text to canvas'
							variant='light'
							size='sm'
							onClick={addText}
							style={{
								position: 'relative',
								border: '2px solid gray',
								padding: '7px 9px',
								borderRadius: '30px',
							}}>
							Add Text
						</Button>
						<Button
							title='Add image to canvas'
							variant='light'
							size='sm'
							style={{
								position: 'relative',
								border: '2px solid gray',
								padding: '7px 9px',
								borderRadius: '30px',
							}}>
							<input
								type='file'
								onChange={addImage}
								className='w-100 h-100'
								style={{
									opacity: 0,
									position: 'absolute',
									top: 0,
									left: 0,
								}}
							/>
							Upload Image
						</Button>
					</div>{' '}
					<hr style={{ margin: '25px 0px' }} />
					<div className='d-flex gap-3'>
						<button
							style={{
								border: '2px solid gray',
								padding: '7px 15px',
								fontSize: '15px',
								borderRadius: '30px',
							}}
							onClick={handleNavigate}>
							<BiHelpCircle /> Help
						</button>

						<button
							style={{
								border: '2px solid gray',
								padding: '7px 20px',
								borderRadius: '30px',
								fontSize: '15px',
							}}
							onClick={handleInfo}>
							<BiInfoCircle /> Info
						</button>
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default CustomizeLeftPanel;
