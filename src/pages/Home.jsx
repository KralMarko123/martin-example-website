import React from 'react';
import capetown from '../assets/images/capetown.jpg';
import squirrel from '../assets/images/squirrel.jpg';
import nature from '../assets/images/nature.jpg';
import videoExample from '../assets/videos/example video.mp4';
import FullCover from '../components/FullCover';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FadeInSection from '../components/FadeInSection';
import './Page.css';
import './Home.css';

const Home = () => {
	return (
		<div className='page home'>
			<Navbar />
			<FullCover url={capetown}>
				<div id='intro-section' className='simple-section'>
					<FadeInSection>
						<h1 className='title'>
							This is a simple page cover title with a small subtitle under it.
						</h1>
						<h3 className='subtitle condensed'>
							<b>Source:</b> The page you showed me had something like this and it looked kind of
							cool
						</h3>
					</FadeInSection>
				</div>
			</FullCover>

			<FullCover url={squirrel}>
				<div className='simple-section'>
					<FadeInSection>
						<h1 className='title'>I am 100% sure this is a squirrel.</h1>
						<h1 className='title'>
							This is some other text that is right below the previous text.
						</h1>
						<h1 className='title'>50% of my time went to trying to come up with these texts.</h1>
					</FadeInSection>

					<FadeInSection>
						<h3 className='subtitle condensed'>
							<b>Source:</b> I tried making this cover more impactful
						</h3>
					</FadeInSection>
				</div>
			</FullCover>

			<FullCover url={nature}>
				<div className='simple-section'>
					<FadeInSection>
						<h1 className='title'>These things take time and 100% effort.</h1>
						<h1 className='title'>But also lots of coffee.</h1>
					</FadeInSection>

					<FadeInSection>
						<h3 className='subtitle condensed'>
							<b>Source:</b> Trust me, I wrote this webpage
						</h3>
					</FadeInSection>
				</div>
			</FullCover>

			<FullCover video={videoExample}>
				<div className='call-section'>
					<FadeInSection>
						<h1 className='title condensed link'>Our Initial Mindset</h1>
						<span className='title'>&middot;</span>
						<h1 className='title condensed link'>Our Strategy</h1>
					</FadeInSection>
				</div>
			</FullCover>

			<Footer />
		</div>
	);
};

export default Home;
