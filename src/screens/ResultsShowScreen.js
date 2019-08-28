import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Linking, TouchableOpacity } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
	const [ result, setResult ] = useState(null);
	const id = navigation.getParam('id');

	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};
	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}

	return (
		<View>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return (
						<View>
							<Image style={styles.image} source={{ uri: item }} />
						</View>
					);
				}}
			/>
			{/* <View style={{ padding: 10, flex: 1, fontSize: 9 }}> */}
			<Text style={styles.phoneTextTitle} onPress={() => Linking.openURL(result.url)}>
				{result.name}
			</Text>
			<Text>Rating: {result.rating} stars</Text>
			<Text>{result.city}</Text>
			<Text style={styles.phoneText} onPress={() => Linking.openURL('tel:' + result.phone)}>
				{result.phone}
			</Text>
			<Text>Distance: {(result.distance / 1609).toFixed(1)} miles</Text>
			<Text>Fees</Text>
			{/* </View> */}
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 300
	},
	phoneText: {
		color: '#E91E63',
		textDecorationLine: 'underline'
	},
	phoneTextTitle: {
		color: 'black',
		textDecorationLine: 'underline',
		fontWeight: 'bold',
		fontSize: 14
	}
});

export default ResultsShowScreen;
