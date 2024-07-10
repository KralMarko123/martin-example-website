import React from 'react';
import Links from './Links';
import './Footer.css';

const Footer = () => {
	return (
		<div className='footer'>
			<button className='pill-button condensed'>
				<span>Get In Touch</span>
			</button>
			<Links />
		</div>
	);
};

export default Footer;
