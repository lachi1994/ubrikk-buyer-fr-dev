import React, { Component } from 'react';
import { fabric } from 'fabric';
import FontPicker from 'font-picker-react';
import { Form, Button } from 'react-bootstrap';
import FontFaceObserver from 'fontfaceobserver';
import {  RiDeleteBin5Line} from 'react-icons/ri';
import {  MdOutlineContentCopy } from 'react-icons/md';
import { getOffset, saveCanvasState } from '../../libs/customize-v2-helper';
import {BiBold} from 'react-icons/bi';
import {GrItalic} from 'react-icons/gr';
import {BsTypeUnderline} from 'react-icons/bs'
const fontValues = [
	6, 8, 10, 12, 14, 16, 18, 21, 24, 28, 32, 36, 42, 48, 56, 64, 72, 80, 88, 96, 104, 120, 144,
];

class Toolbar extends Component {
	state = {
		textColor: '#873963',
		value: 24,
		opacityval: '1',
		activeFontFamily: 'Montserrat',
		styles: {
			position: 'absolute',
			display: 'none',
		},
	};

	UNSAFE_componentWillReceiveProps = (newprops) => {
		var canvas = this.props.state.canvas;
		if (canvas) {
			var activeObject = canvas.getActiveObject();
			var left = getOffset('main-canvas').left;
			var top = getOffset('main-canvas').top;
			if (activeObject) {
				this.setState({
					styles: {
						top: activeObject.top + top - 50,
						left: activeObject.left + left + (activeObject.width * activeObject.scaleX) / 2 + 10,
						position: 'fixed',
						display: 'block',
						zIndex: 1000,
					},
				});
			} else {
				this.setState({
					styles: {
						display: 'none',
					},
				});
			}
		}
		this.selobject();
	};

	selobject = () => {
		var canvas = this.props.state.canvas;
		if (canvas) {
			var activeObject = canvas.getActiveObject();
			if (!activeObject) return false;
			if (activeObject.type === 'text') {
				this.setState({
					value: activeObject.fontSize,
					activeFontFamily: activeObject.fontFamily,
					opacityval: Math.round(activeObject.opacity * 100),
				});
			}

			if (activeObject.type === 'image') {
				this.setState({
					opacityval: Math.round(activeObject.opacity * 100),
				});
			}
		}
	};

	setActiveStyle(styleName, value, object) {
		var canvas = this.props.state.canvas;
		object = object || canvas.getActiveObject();

		if (!object) return;
		if (object.setSelectionStyles && object.isEditing) {
			var style = {};
			style[styleName] = value;
			object.setSelectionStyles(style);
			object.setCoords();
		} else {
			object.set(styleName, value);
		}
		object.setCoords();
		canvas.renderAll();
	}

	setTextFont = (fontfamily) => {
		var self = this;
		var myfont = new FontFaceObserver(fontfamily);
		myfont
			.load()
			.then(function () {
				self.setActiveStyle('fontFamily', fontfamily);
			})
			.catch(function (e) {
				console.log(e);
			});
		this.setState({
			activeFontFamily: fontfamily,
		});
	};

	setTextBold = () => {
		var fontBoldValue = this.props.state.fontBoldValue === 'normal' ? 'bold' : 'normal';
		this.setActiveStyle('fontWeight', fontBoldValue);
		this.props.updateState({ fontBoldValue });
	};

	setTextItalic = () => {
		var fontItalicValue = this.props.state.fontItalicValue === 'normal' ? 'italic' : 'normal';
		this.setActiveStyle('fontStyle', fontItalicValue);
		this.props.updateState({ fontItalicValue });
	};

	setTextUnderline = () => {
		var fontUnderlineValue = !this.props.state.fontUnderlineValue ? 'underline' : false;
		this.setActiveStyle('underline', fontUnderlineValue);
		this.props.updateState({ fontUnderlineValue });
	};

	// clearCanvas = () => {
	// 	var canvas = this.props.state.canvas;
	// 	canvas.clear();
	// };

	deleteItem = () => {
		var canvas = this.props.state.canvas;
		var activeObject = canvas.getActiveObject();
		if (!activeObject) return;
		if (activeObject.type === 'activeSelection') {
			activeObject.forEachObject(function (object) {
				canvas.remove(object);
			});
		} else {
			canvas.remove(activeObject);
		}
	};

	setColor = (e) => {
		this.changeObjectColor(e.target.value);
		this.setState({ textColor: e.target.value });
	};

	changeObjectColor = (hex) => {
		this.changeObjectproperty('fill', hex);
	};

	changeObjectproperty(style, hex) {
		let lthis = this;
		var canvas = this.props.state.canvas;
		let obj = canvas.selectedObject;

		if (!obj) obj = canvas.getActiveObject();

		if (obj) {
			if (obj.paths) {
				for (let i = 0; i < obj.paths.length; i++) {
					this.setActiveStyle(style, hex, obj.paths[i]);
				}
			} else if (obj.type === 'group') {
				let objects = obj.getObjects();
				for (let i = 0; i < objects.length; i++) {
					this.setActiveStyle(style, hex, objects[i]);
				}
			} else this.setActiveStyle(style, hex, obj);
		} else {
			let grpobjs = canvas.getActiveObjects();
			if (grpobjs) {
				grpobjs.forEach(function (object) {
					if (object.paths) {
						for (let i = 0; i < object.paths.length; i++) {
							lthis.setActiveStyle(style, hex, obj.paths[i]);
						}
					} else lthis.setActiveStyle(style, hex, obj);
				});
			}
		}
		canvas.renderAll();
		saveCanvasState(canvas);
	}

	fontSize = (event) => {
		this.setState({
			value: event.target.value,
		});
		this.setActiveStyle('fontSize', event.target.value);
	};

	clone = () => {
		var canvas = this.props.state.canvas;
		var activeObject = canvas.getActiveObject();
		if (!activeObject) return false;
		if (activeObject.type === 'activeSelection') {
			activeObject.forEachObject((object) => {
				this.cloneSelObject(object);
			});
		} else {
			this.cloneSelObject(activeObject);
		}
	};

	cloneSelObject = (actobj) => {
		var canvas = this.props.state.canvas;
		canvas.discardActiveObject();
		if (fabric.util.getKlass(actobj.type).async) {
			var clone = fabric.util.object.clone(actobj);
			clone.set({
				left: actobj.left + 50,
				top: actobj.top + 50,
			});
			canvas.add(clone);
			saveCanvasState(canvas);
		} else {
			var clones = fabric.util.object.clone(actobj);
			canvas.add(
				clones.set({
					left: actobj.left + 50,
					top: actobj.top + 50,
				})
			);
			saveCanvasState(canvas);
		}
		canvas.requestRenderAll();
	};

	render() {
		const { canvas, fontBoldValue, fontItalicValue, fontUnderlineValue } = this.props.state;
		const activeObject = canvas?.getActiveObject();
		return (
			<div
				className='px-2 w-100 d-flex gap-3 align-items-center rounded'
				style={{ height:"45px",display:"flex",justifyContent:"center" }}>
				{activeObject && (
					<>
						<FontPicker
							ref={this.pickerRef}
							apiKey='AIzaSyCOyeDUsAnL-jnWudXBKNNma9cXmXsT4tM'
							activeFontFamily={this.state.activeFontFamily}
							limit='150'
							onChange={(nextFont) => this.setTextFont(nextFont.family)} 
							
						/>
						<Form.Select
						className='rounded-pill'
							aria-label='Font size'
							style={{ width: 70,height:'35px',margin:"0px 10px" }}
							value={this.state.value}
							onChange={this.fontSize}>
							{fontValues.map((value) => (
								<option key={value} value={value}>
									{value}
								</option>
							))}
							
						</Form.Select>
						<Form.Control
							type='color'
							
							value={this.state.textColor}
							onChange={this.setColor}
							title='Choose your color'
						
						/>

						<Button
							title='Bold'
							variant={fontBoldValue === 'bold' ? 'light' : 'text'}
							onClick={this.setTextBold}>
							<BiBold/>
						</Button>
						<Button
							title='Italic'
							variant={fontItalicValue === 'italic' ? 'light' : 'text'}
							onClick={this.setTextItalic}>
							<GrItalic/>
						</Button>
						<Button
							title='Underline'
							variant={fontUnderlineValue ? 'light' : 'text'}
							onClick={this.setTextUnderline}>
							
							<BsTypeUnderline/>
						</Button>

						<Button title='Duplicate Item' variant='light' onClick={this.clone}>
							<MdOutlineContentCopy  color='blue'/>
						</Button>
						<Button title='Delete Item' className='rounded-circle' variant='danger' onClick={this.deleteItem}>
							<RiDeleteBin5Line />
						</Button>
						{/* <Button title='Clear Canvas' variant='danger' onClick={this.clearCanvas}>
							Clear Canvas
						</Button> */}
					</>
				)}
			</div>
		);
	}
}

export default Toolbar;
