import * as React from 'react';

import { useSelector } from 'react-redux';
import FabricCanvas from './customize-canvas';
import Toolbar from './customize-toolbar';
import NameplateSidebar from './customize-left-panel';
import CarsSidebar from './customize-car-left-panel';
import KidsBagsSidebar from './kids-bags-left-panel';
import Header from '../landing/Header';
import { AiFillAccountBook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import './customize.css'
import { FacebookFilled } from '@ant-design/icons';
const CustomizeV2 = () => {
	const [state, setState] = React.useState({
		canvas: null,
		canvaswidth: 780,
		canvasheight: 440,
		fontBoldValue: 'normal',
		fontItalicValue: 'normal',
		fontUnderlineValue: false,
	});
	const updateCanvas = (canvas) => {
		setState((prev) => ({ ...prev, canvas }));
	};

	const updateState = (stateoptions) => {
		setState((prev) => ({ ...prev, ...stateoptions }));
	};

	const service = useSelector((state) => state.order.service);

	return (
		<>

			<div className="customize-container">
				<Header />

				<div className="customize-body">
					<div className='center-body'>
						<div className="customize-sidebar">
							{(() => {
								// new features
								if (service === 'Nameplate') {
									return (
										<div
											className=' px-3 d-flex flex-column justify-content-center align-items-center invisible-on-999'
											style={{ width: 270 }}>
											{/* <NameplateSidebar canvas={state.canvas} updateState={updateState} /> */}
											<CarsSidebar canvas={state.canvas} updateState={updateState} />
										</div>
									);

									//  new features
								} else if (service === "Kids' Bags") {
									return (
										<div
											className='bg-dark px-3 d-flex flex-column justify-content-center align-items-center invisible-on-999'
											style={{ width: 270 }}>
											<KidsBagsSidebar canvas={state.canvas} updateState={updateState} />
										</div>
									);
								} else if (service === "Cars") {
									return (
										<div
											className='bg-dark px-3 d-flex flex-column justify-content-center align-items-center invisible-on-999'
											style={{ width: 270 }}>
											<CarsSidebar canvas={state.canvas} updateState={updateState} />
										</div>
									);
								}
							})()}
						</div>
						<div className="customize-outlet">
							<Toolbar state={state} updateState={updateState} updateCanvas={updateCanvas} />
							<FabricCanvas state={state} updateCanvas={updateCanvas} updateState={updateState} />
						</div>
					</div>

					<div className='footer-body'>

						<div className="customize-footer">
							<div className="customize-social-icons">
								<AiFillInstagram />
								<AiFillTwitterCircle />
								<BsFacebook />
							</div>
							<div className="btn-grp">
								<button className='transparent'>Back</button>
								<button >Next</button>
							</div>
						</div>

					</div>
				</div>

				<h3 className='openDesktop'>Please Open in desktop mode !!!!</h3>

			</div>
		</>
	);
};

export default CustomizeV2;


