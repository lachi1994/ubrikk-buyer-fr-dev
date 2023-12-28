import * as React from 'react';
import { useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { fabric } from 'fabric';
import Card from 'react-bootstrap/Card';

// import OrderPreview from './order-preview';
// import { saveCanvasState, selectObject } from '../libs/customize-v2-helper';
// import useWindowDimensions from '../hooks/use-window-dimensions';
// import { getMaterialSrc } from '../libs/get-material';
// import { setCustomizationUrl, setCustomizationMaterial } from '../redux/reducers/order';

// const INIT_SOLID_COLORS = ['#fff000', '#ffffff'];

// const formSelects = [
// 	{
// 		title: 'Material Type',
// 		name: 'name',
// 		options: [
// 			{ value: 'Aluminium' },
// 			{ value: 'Plain Steel' },
// 			{ value: 'Stainless Steel' },
// 			{ value: 'Metal Sheet' },
// 			{ value: 'Plain Plastic' },
// 			{ value: 'ABC Plastic' },
// 			{ value: 'Acrylic Plastic' },
// 		],
// 	},
// 	{
// 		title: 'Material Thickness',
// 		name: 'thickness',
// 		options: [
// 			{ value: '0.5mm' },
// 			{ value: '1.0mm' },
// 			{ value: '1.5mm' },
// 			{ value: '2.0mm' },
// 			{ value: '3.0mm' },
// 		],
// 	},
// 	{
// 		title: 'Material Size',
// 		name: 'size',
// 		options: [
// 			{ value: '780x440', name: '3x5' },
// 			{ value: '780x390', name: '3x4' },
// 			{ value: '780x340', name: '2x3' },
// 			{ value: '780x290', name: '1x3' },
// 			{ value: '780x240', name: '1x2' },
// 		],
// 	},
// ];

const KidsBagsLeftPanel = (props) => {
	// const dispatch = useDispatch();
	// const [preview, setPreview] = React.useState('');
	// const [stateoptions, setOptions] = React.useState({
	// 	name: 'Plain Plastic',
	// 	thickness: '0.5mm',
	// 	size: '780x440',
	// });

	// const addText = () => {
	// 	var canvas = props.canvas;
	// 	var text = new fabric.Textbox('Add text', {
	// 		fontFamily: 'Montserrat',
	// 		left: 100,
	// 		top: 100,
	// 		type: 'text',
	// 		fontSize: 24,
	// 		width: 200,
	// 	});
	// 	canvas.add(text);
	// 	canvas.setActiveObject(text);
	// 	selectObject(canvas);
	// 	canvas.renderAll();
	// };

	// const addImage = (e) => {
	// 	const file = e.target.files[0];
	// 	const reader = new FileReader();
	// 	reader.readAsDataURL(file);
	// 	reader.onload = () => {
	// 		const canvas = props.canvas;
	// 		fabric.Image.fromURL(reader.result, (img) => {
	// 			img.set({ top: 50, left: 50 });
	// 			canvas.add(img);
	// 			canvas.setActiveObject(img);
	// 			selectObject(canvas);
	// 			canvas.renderAll();
	// 		});
	// 	};
	// 	reader.onerror = (error) => console.log('Error: ', error);
	// };

	// // add shapes to canvas
	// // add circle
	// const addCircle = () => {
	// 	const canvas = props.canvas;
	// 	const circle = new fabric.Circle({
	// 		radius: 30,
	// 		left: 10,
	// 		top: 10,
	// 		strokeWidth: 2,
	// 		stroke: '#000000',
	// 		fill: '',
	// 	});
	// 	canvas.add(circle);
	// 	canvas.setActiveObject(circle);
	// 	selectObject(canvas);
	// 	canvas.renderAll();
	// };

	// // add square
	// const addSquare = () => {
	// 	const canvas = props.canvas;
	// 	const square = new fabric.Rect({
	// 		width: 100,
	// 		height: 100,
	// 		left: 10,
	// 		top: 10,
	// 		strokeWidth: 2,
	// 		stroke: '#000000',
	// 		fill: '',
	// 	});
	// 	canvas.add(square);
	// 	canvas.setActiveObject(square);
	// 	selectObject(canvas);
	// 	canvas.renderAll();
	// };

	// // add rectangle
	// const addRectangle = () => {
	// 	const canvas = props.canvas;
	// 	const rectangle = new fabric.Rect({
	// 		width: 250,
	// 		height: 50,
	// 		left: 10,
	// 		top: 10,
	// 		strokeWidth: 2,
	// 		stroke: '#000000',
	// 		fill: '',
	// 	});
	// 	canvas.add(rectangle);
	// 	canvas.setActiveObject(rectangle);
	// 	selectObject(canvas);
	// 	canvas.renderAll();
	// };

	// const deleteCanvasBg = () => {
	// 	var canvas = props.canvas;
	// 	canvas.backgroundColor = '';
	// 	canvas.renderAll();
	// 	//if (!lcanvas) lcanvas = canvas;
	// 	var objects = canvas.getObjects().filter(function (o) {
	// 		return o.bg === true;
	// 	});
	// 	for (var i = 0; i < objects.length; i++) {
	// 		canvas.remove(objects[i]);
	// 	}
	// 	canvas.bgsrc = '';
	// 	canvas.bgcolor = '';
	// };

	// const setBGcolor = (color) => {
	// 	deleteCanvasBg();
	// 	var canvas = props.canvas;
	// 	canvas.backgroundColor = color;
	// 	canvas.renderAll();
	// 	saveCanvasState(canvas);
	// };

	// const setBGimage = (src) => {
	// 	const canvas = props.canvas;
	// 	let bgsrc = src;
	// 	if (bgsrc) {
	// 		deleteCanvasBg();
	// 		fabric.Image.fromURL(bgsrc, (bg) => {
	// 			const canvasAspect = canvas.width / canvas.height;
	// 			const imgAspect = bg.width / bg.height;
	// 			let scaleFactor;
	// 			if (canvasAspect >= imgAspect) {
	// 				scaleFactor = (canvas.width / bg.width) * 1;
	// 			} else {
	// 				scaleFactor = (canvas.height / bg.height) * 1;
	// 			}
	// 			bg.set({
	// 				originX: 'center',
	// 				originY: 'center',
	// 				opacity: 1,
	// 				selectable: false,
	// 				hasBorders: false,
	// 				hasControls: false,
	// 				hasCorners: false,
	// 				left: canvas.width / 2,
	// 				top: canvas.height / 2,
	// 				scaleX: scaleFactor,
	// 				scaleY: scaleFactor,
	// 				strokeWidth: 0,
	// 			});
	// 			canvas.add(bg);
	// 			canvas.sendToBack(bg);
	// 			bg.bg = true;
	// 			canvas.bgsrc = bgsrc;
	// 			saveCanvasState(canvas);
	// 		});
	// 	}
	// };

	// const setDimensions = (dimension) => {
	// 	var canvas = props.canvas;
	// 	canvas.width = +dimension.split('x')[0];
	// 	canvas.height = +dimension.split('x')[1];
	// 	canvas.renderAll();
	// 	props.updateState({
	// 		canvaswidth: +dimension.split('x')[0],
	// 		canvasheight: +dimension.split('x')[1],
	// 	});
	// 	saveCanvasState(canvas);
	// };

	// const handleOptionsChange = (e) => {
	// 	const { value, name } = e.target;
	// 	setOptions((prev) => ({ ...prev, [name]: value }));
	// 	if (name === 'size') setDimensions(value);
	// 	if (name === 'name') {
	// 		if (!value.includes('Plastic')) setBGimage(getMaterialSrc(value));
	// 		else setBGcolor('#ffffff');
	// 	}
	// };

	// const getImage = () => {
	// 	const canvasdata = document.getElementById('main-canvas');
	// 	const canvasDataUrl = canvasdata.toDataURL();
	// 	return canvasDataUrl;
	// };

	// const handleDone = () => {
	// 	if (props.canvas._objects.length > 0) {
	// 		if (props.canvas._objects.length === 1 && props.canvas._objects[0]?.bg)
	// 			return toast.info('Canvas cannot be empty');
	// 		else {
	// 			dispatch(setCustomizationUrl(getImage()));
	// 			dispatch(setCustomizationMaterial(stateoptions));
	// 			setPreview(true);
	// 		}
	// 	} else {
	// 		toast.info('Canvas cannot be empty');
	// 	}
	// };

	const service = useSelector((state) => state.order.service);

	return (
		<>
			{/* <OrderPreview show={preview} onHide={() => setPreview(false)} /> */}

			<Card className='w-100'>
				<Card.Header as='h5' className='text-uppercase text-center'>
					{service}
				</Card.Header>
				{/* <Card.Body>
					{formSelects.map(({ title, name, options }) => (
						<Form.Group key={name} controlId={name} className='mb-2'>
							<Form.Label>{title}</Form.Label>
							<Form.Select
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
											height: 25,
											width: 25,
											backgroundColor: color,
										}}
										onClick={() => setBGcolor(color)}></span>
								))}
							</div>
						</div>
					)}
					<div className='mb-3'>
						<p className='mb-1'>Add Shapes</p>
						<div className='d-flex gap-2'>
							<span
								className='bg-dark rounded-circle'
								style={{ width: 25, height: 25, cursor: 'pointer' }}
								onClick={addCircle}></span>
							<span
								className='bg-dark'
								style={{ width: 25, height: 25, cursor: 'pointer' }}
								onClick={addSquare}></span>
							<span
								className='bg-dark'
								style={{ width: 60, height: 25, cursor: 'pointer' }}
								onClick={addRectangle}></span>
						</div>
					</div>
					<div className='d-flex gap-2'>
						<Button title='Add text to canvas' size='sm' onClick={addText}>
							Add Text
						</Button>
						<Button title='Add image to canvas' size='sm' style={{ position: 'relative' }}>
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
							Add Image
						</Button>
					</div>
				</Card.Body>
				<Card.Footer>
					<Button variant='success' onClick={handleDone}>
						Done
					</Button>
				</Card.Footer> */}
			</Card>
		</>
	);
};

export default KidsBagsLeftPanel;