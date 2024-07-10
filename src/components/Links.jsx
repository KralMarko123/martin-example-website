import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Links.css';

const Links = () => {
	return (
		<div className='links'>
			<FaEnvelope />
			<FaFacebook />
			<FaInstagram />
			<FaLinkedin />
		</div>
	);
};

export default Links;
