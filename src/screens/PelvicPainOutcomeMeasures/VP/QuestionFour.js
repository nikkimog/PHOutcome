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

export const calculateQ4 = () => {
	return counter;
};

export default function QuestionFour() {
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
				4. Because of pain pills I take for my pelvic pain
			</Text>
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
					label="I don’t take pain pills for my pelvic pain or I don’t have any problems with the pills that I take for pelvic pain. "
					value="zero"
				/>
				<RadioButton.Item
					color="steelblue"
					label="I can do all of my work, and go out in the evening if I want, but I feel out of sorts"
					value="one"
				/>
				<RadioButton.Item
					color="steelblue"
					label="I can concentrate just enough to do my work, but I can’t do more, like go out in the
evenings. I"
					value="two"
				/>
				<RadioButton.Item
					label="I am sleepy and I have trouble concentrating at work or while I do housework"
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
