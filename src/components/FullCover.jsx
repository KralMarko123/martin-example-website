import React from 'react';
import './FullCover.css';

const FullCover = ({ children, url, video }) => {
	return !video ? (
		<div className='full-cover'>
			<div className='pic dark' style={{ backgroundImage: `url('${url}')` }}></div>
			<div className='content'>{children}</div>
		</div>
	) : (
		<div className='full-cover'>
			<video autoPlay muted loop className='video dark' src={video}></video>
			<div className='content'>{children}</div>
		</div>
	);
};

export default FullCover;
