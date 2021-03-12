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
import { RadioButton } from "react-native-paper";

let counter = 0;

export const calculateQ2 = () => {
	console.log("counter", counter);
	return counter;
};

export default function QuestionTwo(props) {
	const [checked, setChecked] = React.useState("zero");
	const [score, setScore] = React.useState(0);
	console.log("props", props);
	function scoreMath(value) {
		console.log(value);
		if (value === "zero") {
			counter = 0;
		} else if (value === "one") {
			counter = 1;
		}
		console.log("counter in score math", counter);
	}
	return (
		<SafeAreaView style={styles.container}>
			<Text>
				Ability to do household chores (cooking, housecleaning, laundry)?
			</Text>
			<Text>Not at All-- Q2</Text>
			<RadioButton
				value="zero"
				status={checked === "zero" ? "checked" : "unchecked"}
				onPress={() => {
					setChecked("zero");
					scoreMath("zero");
				}}
			/>
			<Text>Slightly</Text>
			<RadioButton
				value="one"
				status={checked === "one" ? "checked" : "unchecked"}
				onPress={() => {
					setChecked("one");
					scoreMath("one");
				}}
			/>
			<Text>Moderately</Text>
			<RadioButton
				value="two"
				onPress={() => {
					setChecked("two");
					// calculateScore();
				}}
				status={checked === "two" ? "checked" : "unchecked"}
			/>
			<Text>Greatly</Text>
			<RadioButton
				value="three"
				onPress={() => {
					setChecked("three");
					// calculateScore();
				}}
				status={checked === "three" ? "checked" : "unchecked"}
			/>
			{/* <Button title="calculate score" onPress={() => calculateScore()} />
			<Text>{score}</Text> */}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
});
