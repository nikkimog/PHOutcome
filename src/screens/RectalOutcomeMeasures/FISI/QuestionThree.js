import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { RadioButton } from "react-native-paper";
let counter = 0;

export const calculateQ3 = () => {
	return counter;
};

export default function QuestionThree() {
	const [value, setValue] = React.useState();
	function scoreMath(val) {
		if (val === "zero") {
			counter = 0;
		} else if (val === "one") {
			counter = 8;
		} else if (val === "two") {
			counter = 10;
		} else if (val === "three") {
			counter = 13;
		} else if (val === "four") {
			counter = 17;
		} else if (val === "five") {
			counter = 19;
		}
	}
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>3. Incontinent for liquid stool?</Text>
			<RadioButton.Group
				style={styles.item}
				onValueChange={(value) => {
					setValue(value);
					scoreMath(value);
				}}
				value={value}
			>
				<RadioButton.Item color="steelblue" label="Never" value="zero" />
				<RadioButton.Item
					color="steelblue"
					label="1 - 3 times per month"
					value="one"
				/>
				<RadioButton.Item
					color="steelblue"
					label="1 time per week"
					value="two"
				/>
				<RadioButton.Item
					label="2 or more times per week"
					value="three"
					color="steelblue"
				/>
				<RadioButton.Item
					color="steelblue"
					label="1 time per day"
					value="four"
				/>
				<RadioButton.Item
					color="steelblue"
					label="2 or more times per day"
					value="five"
				/>
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
