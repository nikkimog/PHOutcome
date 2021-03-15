import React, { useEffect, useState, createContext } from "react";
import {
	FlatList,
	Keyboard,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BladderHome from "../BladderOutcomeMeasures/BladderHome";
import RectalHome from "../RectalOutcomeMeasures/RectalHome";
import PelvicHome from "../PelvicPainOutcomeMeasures/PelvicPainHome";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-paper";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import Carousel, { Pagination } from "react-native-x2-carousel";

const Drawer = createDrawerNavigator();

const DATA = [
	{ text: "Pelvic Floor Fun Facts" },
	{ text: "A regular urination frequency is every 2-4 hours" },
	{ text: "Less than 3 bowel movements a week is constipation" },
	{ text: "Carbonated beverages are a bladder irritant" },
];
// const DATA = [{ text: "#1" }, { text: "#2" }, { text: "#3" }];

function HomeScreen({ navigation }) {
	const handlePress = () => <Bladder />;
	const renderItem = (data) => (
		<View key={data.text} style={styles.item}>
			<Text style={styles.itemText}>{data.text}</Text>
			{/* <Image source={data.file} /> */}
		</View>
	);
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.baseText} onPress={handlePress}>
				Welcome to Pelvic Health Outcomes {"\n"}
			</Text>
			<View
			// style={{ textAlign: "center" }}
			>
				<Text style={styles.bodyText}> Swipe right or</Text>
				<Button
					style={{ width: 150, marginLeft: "auto", marginRight: "auto" }}
					mode="contained"
					color="steelblue"
					onPress={() => navigation.openDrawer()}
				>
					Tap Here
				</Button>
				<Text style={styles.bodyText}>to view the categories.</Text>
			</View>

			<View style={styles.carousel}>
				<Carousel pagination={Pagination} renderItem={renderItem} data={DATA} />
			</View>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: "steelblue",
		accent: "steelblue",
	},
};

export default function Apps(props) {
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer independent={true}>
				<Drawer.Navigator initialRouteName="Home" headerBackTitle="null">
					<Drawer.Screen name="Home" component={HomeScreen} />
					<Drawer.Screen name="Urinary Outcomes" component={BladderHome} />
					<Drawer.Screen name="Rectal Outcomes" component={RectalHome} />
					<Drawer.Screen name="Pelvic Pain Outcomes" component={PelvicHome} />
				</Drawer.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",

		fontSize: 40,
	},
	baseText: {
		marginTop: 50,
		fontFamily: "Cochin",
		fontSize: 30,
		textAlign: "center",
	},
	bodyText: {
		textAlign: "center",
		fontSize: 20,
		marginBottom: 10,

		marginTop: 10,
		fontFamily: "Arial Rounded MT Bold",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10,
	},

	item: {
		marginTop: 50,
		width: 200,
		height: 200,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		color: "white",
		backgroundColor: "slategray",
	},
	itemText: {
		margin: 20,
		fontFamily: "Arial Rounded MT Bold",
		fontSize: 25,
		textAlign: "center",
		color: "white",
	},
});
