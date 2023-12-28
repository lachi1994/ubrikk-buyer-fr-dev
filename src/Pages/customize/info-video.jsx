import * as React from 'react';
import Modal from 'react-bootstrap/Modal';

import video from '../../assets/video/video.webm';


const InfoVideo = (props) => {
	return (
		<>
			<Modal {...props}>
				<Modal.Header closeButton>
					<Modal.Title>Explanation Video</Modal.Title>
				</Modal.Header>
				<Modal.Body className='shadow-lg bg-white w-100 p-3 flex-grow-1 d-flex justify-content-center align-items-center' >
               <iframe
                  width="853"
                  height="450"
                  src={video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Explainer Video"
               />
				</Modal.Body>
					<h5 className='text-center'>Please expand the video</h5>
			</Modal>
		</>
	);
};


export default InfoVideo;


