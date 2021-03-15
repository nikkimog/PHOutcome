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
	return counter;
};

export default function QuestionTwo() {
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
			<Text style={styles.text}>2. My Pelvic Pain</Text>
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
					label="My pain does not get worse with walking; I can walk as far as I want to"
					value="zero"
				/>
				<RadioButton.Item
					color="steelblue"
					label="Gets a little worse when I walk. I can walk far enough to do my errands, like grocery
shopping, but it would be very painful to walk longer distances for fun or exercise. "
					value="one"
				/>
				<RadioButton.Item
					color="steelblue"
					label="Gets worse when I walk. I can walk a short distance outside the house, but it is very
painful to walk far enough to get a full load of groceries in a grocery store. "
					value="two"
				/>
				<RadioButton.Item
					label="Gets worse when I walk, so I can only walk far enough to move around in my house, no
further"
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
