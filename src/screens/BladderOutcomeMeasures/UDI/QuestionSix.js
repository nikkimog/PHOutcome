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

export const calculateQ6 = () => {
	return counter;
};

export default function QuestionSix() {
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
		} else if (val === "four") {
			counter = 4;
		}
	}
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>
				6. Emotional health (nervousness, depression, etc?)
			</Text>
			<RadioButton.Group
				style={styles.item}
				onValueChange={(value) => {
					setValue(value);
					scoreMath(value);
				}}
				value={value}
			>
				<RadioButton.Item color="steelblue" label="Not present" value="zero" />
				<RadioButton.Item color="steelblue" label="Not at all" value="one" />
				<RadioButton.Item color="steelblue" label="Somewhat" value="two" />
				<RadioButton.Item label="Moderately" value="three" color="steelblue" />
				<RadioButton.Item label="Quite a bit" value="four" color="steelblue" />
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
