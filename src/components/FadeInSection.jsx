import React, { useState, useEffect, useRef } from 'react';
import './FadeInSection.css';

const FadeInSection = ({ children }) => {
	const domRef = useRef();
	const [isVisible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setVisible(true);
					observer.unobserve(domRef.current);
				}
			},
			{ rootMargin: '0% 0% -30% 0%' }
		);

		observer.observe(domRef.current);

		return () => observer.disconnect();
	}, []);
	return (
		<div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
			{children}
		</div>
	);
};

export default FadeInSection;
