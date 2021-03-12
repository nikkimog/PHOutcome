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
import QuestionOne from "./bladderquestions/QuestionOne";
import QuestionTwo from "./bladderquestions/QuestionTwo";
import { calculateQ2 } from "./bladderquestions/QuestionTwo";
import { calculateQ1 } from "./bladderquestions/QuestionOne";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Bladder({ navigation }) {
	const [checked, setChecked] = React.useState("first");
	const [score, setScore] = React.useState(0);
	let total = 7;
	function calculateScore() {
		setScore(0);
		// console.log("score", score);
		console.log("checked", checked);
		// console.log("beenClicked", beenClicked);
		// console.log(beenClicked === "false");
		if (checked === "first") {
			// beenClicked = !beenClicked;
			// console.log("beenClicked", beenClicked);
			console.log("score", score);
			setScore(score + 1);
		}
	}
	function scoreMathz() {
		total = calculateQ1() + calculateQ2();
		console.log("total in scoreMathz", total);
		setScore(total);
		// return (
		// 	<View>
		// 		<Text>ldsfjak;sdjf;adjks;askdjf;aksfj;akllkj</Text>
		// 	</View>
		// );
	}
	return (
		<View>
			<Button title="UDI" onPress={() => navigation.navigate("q2")} />
			{/* {<NavigationContainer independent={true}> */}
			<Stack.Navigator>
				<Stack.Screen name="q1" component={QuestionOne} />
				<Stack.Screen
					name="q2"
					component={QuestionTwo}
					options={{ title: "Bladder Quiz" }}
				/>
			</Stack.Navigator>
			{/* </NavigationContainer>  */}
		</View>
		// <ScrollView style={styles.container}>
		// 	<Text>Has urine leakage (incontinence) affected your: </Text>
		// 	<QuestionOne />
		// 	<QuestionTwo />
		// 	<QuestionOne />
		// 	<QuestionOne />
		// 	<QuestionOne />
		// 	<QuestionOne />
		// 	<QuestionOne />
		// 	<Button title="calculate score" onPress={() => scoreMathz()} />
		// 	<Text>{score}</Text>
		// </ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		// alignItems: "center",
		// justifyContent: "center",
	},
});
