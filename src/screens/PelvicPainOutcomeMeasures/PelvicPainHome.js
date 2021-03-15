import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import VPHome from "./VP/VPHome";

import { TextInput } from "react-native-paper";
import { useTheme, Button } from "react-native-paper";

const Stack = createStackNavigator();

function PelvicPainHome(props) {
	let navigation = props.navigation;
	const { colors } = useTheme();

	const [text, setText] = React.useState("");

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>
				Choose a Pelvic Pain Focused Outcome Measure
			</Text>
			<Button
				mode="contained"
				style={{
					width: 350,
					marginLeft: "auto",
					marginRight: "auto",
					marginBottom: 10,
				}}
				title="Vulvar Pain Functional Quesionnaire"
				onPress={() =>
					navigation.navigate("Vulvar Pain Functional Questionnaire", {
						email: { text },
					})
				}
			>
				Vulvar Pain Functional Quesionnaire
			</Button>
			<Text style={styles.bottomText}>
				If you'd like to send these results to your provider, enter their email
				below.
			</Text>
			<TextInput
				style={{
					width: 300,
					color: colors.primary,
				}}
				label="Email"
				mode="outlined"
				value={text}
				onChangeText={(text) => setText(text)}
			/>
		</SafeAreaView>
	);
}

export default function PelvicPainRoot() {
	return (
		<Stack.Navigator initialRouteName="Pelvic Pain Home" headerBackTitle="null">
			<Stack.Screen name="Pelvic Pain Home" component={PelvicPainHome} />
			<Stack.Screen
				name="Vulvar Pain Functional Questionnaire"
				headerTitle="none"
				component={VPHome}
			/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
	},
	text: {
		margin: 30,
		fontFamily: "ArialMT",
		fontSize: 20,
		textAlign: "center",
	},
	bottomText: {
		marginTop: 40,
		margin: 10,
	},
});
