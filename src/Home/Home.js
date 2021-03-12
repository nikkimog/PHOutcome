import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	Button,
} from "react-native";
import { Bladder } from "./bladderPage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Main(props) {
	console.log('props',props)
	const handlePress = () => <Bladder />;
	return (
		<SafeAreaView style={styles.container}>
			<Text numberOfLines={1} onPress={handlePress}>
				Test your pelvic health knowledge!
			</Text>
			<Text>
				{" "}
				Swipe right or
				{/* <Button title="click here" onPress={() => navigation.openDrawer()} /> to */}
				view the quizzes!
			</Text>
			<Image
				// resizeMode="repeat"
				style={{ height: 100, width: 100 }}
				source={require("./assets/image7.png")}
			/>
			<Text>Yo</Text>
			<Button
				color="orange"
				title="click me"
				onPress={() => alert("button tapped")}
			/>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
// }
// function Apps() {
// 	console.log("hello");
// 	let x = 1;

// 	return (
// 		<NavigationContainer>
// 			{/* <Stack.Navigator>
// 				<Stack.Screen name="home" component={Home} />
// 				<Stack.Screen
// 					name="bladder"
// 					component={Bladder}
// 					options={{ title: "Bladder Quiz" }}
// 				/>
// 			</Stack.Navigator> */}
// 			<Drawer.Navigator initialRouteName="NewHome">
// 				<Drawer.Screen name="NewHome" component={HomeScreen} />
// 				<Drawer.Screen name="bladder" component={Bladder} />
// 			</Drawer.Navigator>
// 		</NavigationContainer>
// 	);
// }

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
