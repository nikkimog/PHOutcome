import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";

import { calculateQ1 } from "./QuestionOne";
import { calculateQ2 } from "./QuestionTwo";
import { calculateQ3 } from "./QuestionThree";
import { calculateQ4 } from "./QuestionFour";
import { calculateQ5 } from "./QuestionFive";
import sendEmail from "../../sendEmail";

import qs from "qs";
import { Linking } from "react-native";
import { Banner } from "react-native-paper";

// async function sendEmail(to, subject, body, options = {}) {
// 	const { cc, bcc } = options;

// 	let url = `mailto:${to}`;

// 	// Create email link query
// 	const query = qs.stringify({
// 		subject: subject,
// 		body: body,
// 		cc: cc,
// 		bcc: bcc,
// 	});

// 	if (query.length) {
// 		url += `?${query}`;
// 	}
// 	console.log("url", url);

// 	// check if we can use this link
// 	const canOpen = await Linking.canOpenURL(url);

// 	if (!canOpen) {
// 		throw new Error("Provided URL can not be handled");
// 	}

// 	return Linking.openURL(url);
// }

let total = 0;
export default function VPHome(props) {
	const [visible, setVisible] = React.useState(true);
	console.log("props", props);
	let email = props.route.params.email.text;
	const [score, setScore] = React.useState("Tap above to calcluate!");

	// const [q7, setQ7] = React.useState(0);
	function scoreMathz() {
		total = 0;
		// setQ7(calculateQ7());
		total =
			calculateQ1() +
			calculateQ2() +
			calculateQ3() +
			calculateQ4() +
			calculateQ5();
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
			<Text style={styles.header}>
				Please choose the item that best describes your situation.
			</Text>
			<QuestionOne />
			<QuestionTwo />
			<QuestionThree />
			<QuestionFour />
			<QuestionFive />

			<Button
				mode="contained"
				title="click here"
				labelStyle={{ color: "white" }}
				// color="white"
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
					// margin: 10,
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
						"VP Score",
						`Hello, ${"\n"} My VP score on ${dateTime} was ${score}.${"\n"} Thank you`
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
