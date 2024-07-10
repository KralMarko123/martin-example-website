import React, { useState, useEffect } from 'react';
import Links from './Links';
import './Navbar.css';

const Navbar = () => {
	const [show, setShow] = useState(true);
	const [lastScrollPosition, setLastScrollPosition] = useState(0);

	const toggleNavbar = () => {
		if (window.scrollY > lastScrollPosition) setShow(false);
		else setShow(true);

		setLastScrollPosition(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleNavbar);

		return () => {
			window.removeEventListener('scroll', toggleNavbar);
		};
	}, [lastScrollPosition]);

	return (
		<div className={`nav${!show ? ' hidden' : ''}`}>
			<div className='logo'></div>

			<ul className='menu'>
				<li className='menu-item link'>About Us</li>
				<li className='menu-item link'>Our Mission</li>
				<li className='menu-item link'>Events</li>
				<li className='menu-item link'>Contact Us</li>
			</ul>

			<Links />

			<button className='pill-button condensed'>
				<span>Get In Touch</span>
			</button>
		</div>
	);
};

export default Navbar;
