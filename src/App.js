/** @format */

// ** React
import { useEffect, useState } from 'react';

// ** Components
import Fetch from './components/functional/fetch';
import Lifescycle from './components/functional/lifescycle';

// 3D Library
import { v4 as uuid } from 'uuid';

function App() {
	const [allLeaders, setAllLeaders] = useState([]);
	const [newLeader, setNewLeader] = useState();
	console.log(allLeaders);

	// create new card view
	const addNewTemp = () => {
		let temp = {
			id: uuid().slice(0, 8),
			image: null,
			name: { ar: '', en: '' },
			role: { ar: '', en: '' },
		};
		setAllLeaders((prevState) => [...prevState, temp]);
	};

	// initilize view with one card
	useEffect(() => {
		addNewTemp();
		addNewTemp();
	}, []);

	// handle All leader Array change
	const onLeadersChange = (e, id, lang) => {
		const { name, value, files } = e.target;

		// let newValue;
		// if (name === 'image') {
		// 	newValue = files[0];
		// } else {
		// 	newValue = {
		// 		...newLeader[name],
		// 		[lang]: value,
		// 	};
		// }

		let newArray = allLeaders;
		let idx = allLeaders.findIndex((leader) => leader.id === id);
		console.log(idx);

		newArray[idx] = {
			...newArray[idx],
			[name]: {
				...newArray[idx][name],
				[lang]: value,
			},
		};
		setAllLeaders([...allLeaders, newArray]);
		console.log(allLeaders);
	};

	return (
		<div>
			{/* <Fetch /> */}
			{/* <Lifescycle /> */}
			{allLeaders?.map((leader, idx) => (
				<div key={idx}>
					<p>index: {idx}</p>
					<input name={'image'} type={'file'} onChange={(e) => onLeadersChange(e)} />
					<input
						value={leader.role.ar}
						name={'role'}
						onChange={(e) => onLeadersChange(e, leader.id, 'ar')}
					/>
					<input
						value={leader.role.en}
						name={'role'}
						onChange={(e) => onLeadersChange(e, leader.id, 'en')}
					/>
				</div>
			))}
			<button onClick={() => addNewTemp()}>Add</button>
		</div>
	);
}

export default App;
