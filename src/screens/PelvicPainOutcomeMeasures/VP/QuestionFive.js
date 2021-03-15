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

export const calculateQ5 = () => {
	return counter;
};

export default function QuestionFive() {
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
			<Text style={styles.text}>5. Because of my pelvic pain</Text>
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
					label="It never hurts from my pelvic pain when I have a bowel movement. "
					value="zero"
				/>
				<RadioButton.Item
					color="steelblue"
					label="Most of the time it does not hurt when I have a bowel movement, but every now and
then it does."
					value="one"
				/>
				<RadioButton.Item
					color="steelblue"
					label="It hurts when I try to have a bowel movement, but the pain goes away when I am
finished."
					value="two"
				/>
				<RadioButton.Item
					label="I have very bad pain when I try to have a bowel movement, and it keeps hurting for
at least 5 minutes after I am finished. "
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
