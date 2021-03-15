import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";

import { calculateQ1 } from "./QuestionOne";
import { calculateQ2 } from "./QuestionTwo";
import { calculateQ3 } from "./QuestionThree";
import { calculateQ4 } from "./QuestionFour";
import sendEmail from "../../sendEmail";
import { Banner } from "react-native-paper";

let total = 0;
export default function FISIHome(props) {
	const [visible, setVisible] = React.useState(true);
	let email = props.route.params.email.text;
	const [score, setScore] = React.useState("Tap above to calcluate!");

	function scoreMathz() {
		total = 0;

		total = calculateQ1() + calculateQ2() + calculateQ3() + calculateQ4();
		setScore(total);
	}
	var today = new Date();
	var date =
		today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
	var time =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date + " " + time;

	return (
		<ScrollView style={styles.container}>
			<Banner
				visible={visible}
				actions={[
					{
						label: "Got it",
						onPress: () => setVisible(false),
					},
				]}
				icon="check"
				style={{ fontName: "ArialMT" }}
			>
				Make sure to choose an answer for each question.
			</Banner>
			<Text style={styles.header}>How often are you...</Text>
			<QuestionOne />
			<QuestionTwo />
			<QuestionThree />
			<QuestionFour />

			<Button
				mode="contained"
				title="click here"
				labelStyle={{ color: "white" }}
				style={{ width: 200, marginLeft: "auto", marginRight: "auto" }}
				onPress={() => scoreMathz()}
			>
				Calculate Score
			</Button>
			<Button title="calculate score" onPress={() => scoreMathz()} />
			<Text style={{ textAlign: "center", fontSize: 22, fontStyle: "italic" }}>
				Score: {score}
				{"\n"}
				{"\n"}
			</Text>
			<Button
				labelStyle={{ color: "white" }}
				style={{
					width: 300,
					marginBottom: 80,
					marginLeft: "auto",
					marginRight: "auto",
				}}
				mode="contained"
				color="gray"
				onPress={() =>
					sendEmail(
						email,
						"FISI Score",
						`Hello, ${"\n"} My FISI score on ${dateTime} was ${score}.${"\n"} Thank you`
					).then(() => {
						console.log("Our email successful provided to device mail ");
					})
				}
			>
				Send score to your provider
			</Button>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignContent: "center",
	},
	header: {
		fontSize: 26,
		textAlign: "center",
		margin: 10,
	},
	button: {
		margin: 20,
		backgroundColor: "orange",
	},
});
