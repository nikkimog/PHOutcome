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

export const calculateQ3 = () => {
	return counter;
};

export default function QuestionThree() {
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
			<Text style={styles.text}>3. My pelvic pain</Text>
			<RadioButton.Group
				style={styles.item}
				onValueChange={(value) => {
					setValue(value);
					scoreMath(value);
				}}
				value={value}
			>
				<RadioButton.Item
					color="steelblue"
					label="My pain does not get worse with sitting, I can sit as long as I want to."
					value="zero"
				/>
				<RadioButton.Item
					color="steelblue"
					label="Occasionally gets worse when I sit, but most of the time sitting is comfortable."
					value="one"
				/>
				<RadioButton.Item
					color="steelblue"
					label="Gets worse when I sit. I can sit for longer than 30 minutes at a time, but it is so painful that
it is difficult to do my job or sit long enough to watch a movie"
					value="two"
				/>
				<RadioButton.Item
					label="Gets worse when I sit, so it hurts too much to sit any longer than 30 minutes at a time. "
					value="three"
					color="steelblue"
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
