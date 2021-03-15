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
	return counter;
};

export default function QuestionOne() {
	const [value, setValue] = React.useState();
	function scoreMath(val) {
		if (val === "zero") {
			counter = 0;
		} else if (val === "one") {
			counter = 1;
		} else if (val === "two") {
			counter = 2;
		} else if (val === "three") {
			counter = 3;
		}
	}
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>
				1. Ability to do household chores (cooking, housecleaning, laundry)?
			</Text>
			<RadioButton.Group
				style={styles.item}
				onValueChange={(value) => {
					setValue(value);
					scoreMath(value);
				}}
				value={value}
			>
				<RadioButton.Item color="steelblue" label="Not at All" value="zero" />
				<RadioButton.Item color="steelblue" label="Slightly" value="one" />
				<RadioButton.Item color="steelblue" label="Moderately" value="two" />
				<RadioButton.Item label="Greatly" value="three" color="steelblue" />
			</RadioButton.Group>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		margin: 30,
	},

	text: {
		fontSize: 20,
	},
});
