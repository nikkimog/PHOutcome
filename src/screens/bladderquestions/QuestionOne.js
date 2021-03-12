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

export const calculateQ1 = () => {
	console.log("counter", counter);
	return counter;
};

export default function QuestionOne() {
	const [checked, setChecked] = React.useState("first");
	const [score, setScore] = React.useState(0);
	function scoreMath(value) {
		if (value === "zero") {
			counter = 0;
		} else if (value === "one") {
			counter = 1;
		} else if (value === "two") {
			counter = 2;
		} else if (value === "three") {
			counter = 3;
		}
	}
	return (
		<SafeAreaView style={styles.container}>
			<Text>
				Ability to do household chores (cooking, housecleaning, laundry)?
			</Text>
			<Text>Not at All</Text>
			<RadioButton
				value="zero"
				onPress={() => {
					setChecked("zero");
					scoreMath("zero");
				}}
				status={checked === "zero" ? "checked" : "unchecked"}
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
				}}
				status={checked === "two" ? "checked" : "unchecked"}
			/>
			<Text>Greatly</Text>
			<RadioButton
				value="three"
				onPress={() => {
					setChecked("three");
				}}
				status={checked === "three" ? "checked" : "unchecked"}
			/>
			{/* <Button title="calculate score" onPress={() => calculateScore()} /> */}
			{/* <Text>{score}</Text> */}
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
