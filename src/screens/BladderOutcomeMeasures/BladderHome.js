import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import IIQHome from "./IIQ/IIQHome";
import UDIHome from "./UDI/UDIHome";
import { TextInput } from "react-native-paper";
import { useTheme, Button } from "react-native-paper";

const Stack = createStackNavigator();

function BladderHome(props) {
	let navigation = props.navigation;
	const { colors } = useTheme();

	const [text, setText] = React.useState("");

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>Choose a Urinary Focused Outcome Measure</Text>
			<Button
				mode="contained"
				style={{
					width: 350,
					marginLeft: "auto",
					marginRight: "auto",
					marginBottom: 10,
				}}
				title="Incontinence Impact Questionnaire"
				onPress={() =>
					navigation.navigate("Incontinence Impact Questionniare", {
						email: { text },
					})
				}
			>
				Incontinence Impact Questionnaire
			</Button>
			<Button
				mode="contained"
				title="Urinary Distress Inventory"
				onPress={() =>
					navigation.navigate("Urinary Distress Inventory", { email: { text } })
				}
			>
				Urinary Distress Inventory
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

export default function BladderRoot() {
	return (
		<Stack.Navigator initialRouteName="Urinary Home" headerBackTitle="null">
			<Stack.Screen name="Urinary Home" component={BladderHome} />
			<Stack.Screen
				name="Incontinence Impact Questionniare"
				headerTitle="none"
				component={IIQHome}
			/>
			<Stack.Screen
				name="Urinary Distress Inventory"
				headerTitle="none"
				component={UDIHome}
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
