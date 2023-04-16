/** @format */

// ** React
import { useState } from 'react';

const MultiText = (props) => {
	const { onChange, id } = props;

	// ** States
	const [lang, setLang] = useState('en');
	const [field, setField] = useState({
		ar: '',
		en: '',
	});

	return (
		<div>
			<input
				{...props}
				value={field[lang]}
				placeholder={lang}
				onChange={(e) => {
					setField({ ...field, [lang]: e.target.value });
					onChange(e, lang, id);
				}}
			/>
			<div>
				<button onClick={() => setLang('en')}>en</button>
				<button onClick={() => setLang('ar')}>ar</button>
			</div>
		</div>
	);
};

export default MultiText;
