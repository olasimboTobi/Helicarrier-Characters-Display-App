import './App.css';
import { useState, useEffect } from 'react';
import Search from './components/Search';
import CharactersList from './components/CharactersList';
import { useCharacters } from './hooks/useCharacters';

function App() {
	const [searchText, setSearchText] = useState('');
	const { error, loading, data } = useCharacters();
	const [characters, setCharacters] = useState([]);
	


	const isDisable = characters.length === 0;

	function formatRecord(arr) {
		const formatedRecord = arr.reduce((previous, currentValue) => {
			if (previous[currentValue.created]) {
				const { id, status, name, type, image } = currentValue;
				previous[currentValue.created].push({ id, status, name, type, image });
			} else {
				const { id, status, name, type, image } = currentValue;
				previous[currentValue.created] = [{ id, status, name, type, image }];
			}

			return previous;
		}, {});
		return formatedRecord;
	}

	const handleFilter = (event) => {
		setSearchText(event);
		if (event && data && data?.characters.length) {
			const filteredRecord = data?.characters.filter(
				(obj) =>
					obj.name.toLowerCase().includes(event.toLocaleLowerCase()) ||
					obj.status.toLowerCase().includes(event.toLocaleLowerCase())
			);
			console.log(filteredRecord);
			setCharacters(filteredRecord);
		}
		return ;
	};

	const result = formatRecord(characters);

	useEffect(() => {
		const record = data && data?.characters ? data.characters : [];
		setCharacters(record);
	}, [data]);


	return (
		<div className="app">
			
			<Search
				searchText={searchText}
				setSearchText={handleFilter}
				disabled={isDisable}
			/>

			{error && <div style={{ color: 'red', marginTop:"20px" }}>Something went wrong...</div>}

			{!loading
				? Object.keys(result).map((date) => (
						<div key={date} className="character--container">
							<h3 className="date--character">Date: {date}</h3>
							{result[date].map((item, index) => (
								<CharactersList character={item} key={index} loading={loading} error={error}/>
							))}
						</div>
				  ))
				:loading && <div style={{ color: 'red', marginTop:"20px" }}>Loading...</div> }
			
		</div>
	);
}

export default App;
