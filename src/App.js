/** @format */

// ** React
import { useEffect, useState } from 'react';

// ** Pages
import Fetch from './pages/functional/fetch';
import Lifescycle from './pages/functional/lifescycle';
import AddCards from './pages/addCards';

function App() {
	return (
		<div>
			{/* <Fetch /> */}
			{/* <Lifescycle /> */}
			<AddCards />
		</div>
	);
}

export default App;
