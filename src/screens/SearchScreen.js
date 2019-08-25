import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
	const [ term, setTerm ] = useState('');
	const [ results, setResults ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState('');

	const searchApi = async () => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term,
					location: 'san jose'
				}
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage('Try Again');
		}
	};

	return (
		<View>
			<SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>results: {results.length}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
