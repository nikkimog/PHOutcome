import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import CAIQHome from "./CAIQ/CAIQHome";
import FISIHome from "./FISI/FISIHome";
// import UDIHome from "./UDI/UDIHome";
import { TextInput } from "react-native-paper";
import { useTheme, Button } from "react-native-paper";

const Stack = createStackNavigator();

function RectalHome(props) {
	let navigation = props.navigation;
	const { colors } = useTheme();

	const [text, setText] = React.useState("");

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>Choose a Rectal Focused Outcome Measure</Text>
			<Button
				mode="contained"
				style={{
					width: 350,
					marginLeft: "auto",
					marginRight: "auto",
					marginBottom: 10,
				}}
				title="Colorectal Anal Impact Questionnaire"
				onPress={() =>
					navigation.navigate("Colorectal Anal Impact Questionniare", {
						email: { text },
					})
				}
			>
				Colorectal Anal Impact Questionnaire
			</Button>
			<Button
				mode="contained"
				title="Fecal Incontinence Severity Inventory"
				onPress={() =>
					navigation.navigate("Fecal Incontinence Severity Inventory", {
						email: { text },
					})
				}
			>
				Fecal Incontinence Severity Inventory
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
		<Stack.Navigator initialRouteName="Rectal Home" headerBackTitle="null">
			<Stack.Screen name="Rectal Home" component={RectalHome} />
			<Stack.Screen
				name="Colorectal Anal Impact Questionniare"
				headerTitle="none"
				component={CAIQHome}
			/>
			<Stack.Screen
				name="Fecal Incontinence Severity Inventory"
				headerTitle="none"
				component={FISIHome}
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
