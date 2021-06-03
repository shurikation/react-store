import React from 'react';
import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';


const HomePage = () => (
	<div className="container">
		<section className="homepage">
			<Directory />
		</section>
	</div>
)

export default HomePage;