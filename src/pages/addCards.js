/** @format */
// ** React
import { useEffect, useState } from 'react';

// ** Components
import MultiLangInput from '../components/multiLangInput';

// 3D Library
import { v4 as uuid } from 'uuid';

function App() {
	const storedArtists = JSON.parse(localStorage.getItem('form-artists'));
	const [artists, setArtists] = useState(
		storedArtists || [
			{
				id: uuid().slice(0, 8),
				image: '',
				name: { ar: '', en: '' },
				role: { ar: '', en: '' },
			},
		]
	);

	// Add new artist
	const addNewArtistCard = () => {
		const temp = {
			id: uuid().slice(0, 8),
			image: '',
			name: { ar: '', en: '' },
			role: { ar: '', en: '' },
		};
		setArtists([...artists, temp]);
	};

	// Handle artist array state change
	const handleArtistChange = (e, lang, id) => {
		const { name, value, files } = e.target;
		const newArray = artists.map((artist) => {
			if (artist.id === id) {
				return {
					...artist,
					[name]: name === 'image' ? files[0] : { ...artist[name], [lang]: value },
				};
			} else {
				return artist;
			}
		});
		setArtists(newArray);
	};

	// Delete artist from the array
	const handleArtistDelete = (id) => {
		const newArray = artists.filter((artist) => artist.id !== id);
		setArtists(newArray);
	};

	// ** Store Data
	useEffect(() => {
		localStorage.setItem('form-artists', JSON.stringify(artists));
	}, [artists]);

	return (
		<div>
			{artists.map((artist) => (
				<div key={artist.id} style={{ position: 'relative', padding: 50 }}>
					<p>ID: {artist.id}</p>
					<input
						id={`artist-image${artist.id}`}
						hidden={false}
						name={'image'}
						type={'file'}
						onChange={(e) => handleArtistChange(e, artist.id)}
					/>

					<MultiLangInput id={artist.id} name='name' onChange={handleArtistChange} />

					<MultiLangInput id={artist.id} name='role' onChange={handleArtistChange} />

					<button
						style={{ position: 'absolute', top: 10, left: 10 }}
						onClick={() => handleArtistDelete(artist.id)}>
						x
					</button>
				</div>
			))}
			<button onClick={() => addNewArtistCard()}>Add</button>
		</div>
	);
}

export default App;
