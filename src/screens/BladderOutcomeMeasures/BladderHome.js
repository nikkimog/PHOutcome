import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	Button,
	ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";
// import QuestionOne from "./UDI/bladderquestions/QuestionOne";
// import QuestionTwo from "./UDI/bladderquestions/QuestionTwo";
// import { calculateQ2 } from "./UDI/bladderquestions/QuestionTwo";
// import { calculateQ1 } from "./UDI/bladderquestions/QuestionOne";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import IIQHome from "./IIQ/IIQHome";
import UDIHome from "./UDI/UDIHome";
// import { userContext, Provider } from "../HomeScreen";
import { TextInput } from "react-native-paper";

const Stack = createStackNavigator();

function BladderHome(props) {
	let navigation = props.navigation;
	// static navigationOptions = ({ navigation }) => ({
	// 	title: "MyScreen",
	// 	headerLeft: null,
	// });

	const [text, setText] = React.useState("");
	console.log("bladder home");
	console.log("props in bladder home", props);
	return (
		<SafeAreaView style={styles.container}>
			<Text>Choose a Bladder Focused Outcome Measure</Text>
			<Button
				title="Incontinence Impact Questionnaire"
				onPress={() =>
					navigation.navigate("Incontinence Impact Questionniare", {
						email: { text },
					})
				}
			/>
			<Button
				title="Urinary Distress Inventory"
				onPress={() =>
					navigation.navigate("Urinary Distress Inventory", { email: { text } })
				}
			/>
			<Text>
				If you'd like to send these results to your provider, enter their email
				below.
			</Text>
			<TextInput
				style={{ width: 300 }}
				label="Email"
				mode="outlined"
				value={text}
				onChangeText={(text) => setText(text)}
			/>
		</SafeAreaView>
	);
}

export default function BladderRoot({ navigation }) {
	return (
		<Stack.Navigator initialRouteName="BladderHome" headerBackTitle="null">
			<Stack.Screen name="BladderHome" component={BladderHome} />
			<Stack.Screen
				name="Incontinence Impact Questionniare"
				headerTitle="none"
				component={IIQHome}
				initialParams={{ email: "kaibastos@gmail.com" }}
			/>
			<Stack.Screen
				name="Urinary Distress Inventory"
				headerTitle="none"
				component={UDIHome}
				initialParams={{ email: "kaibastos@gmail.com" }}
			/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		// justifyContent: "center",
	},
});
