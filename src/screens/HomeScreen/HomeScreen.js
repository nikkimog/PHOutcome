import React, { useEffect, useState, createContext } from "react";
import {
	FlatList,
	Keyboard,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import styles from "./styles";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { firebase } from "../../firebase/config";
import BladderHome from "../BladderOutcomeMeasures/BladderHome";
// import QuestionTwo from "../BladderOutcomeMeasures/UDI/bladderquestions/QuestionTwo";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-paper";
import { userContext, Provider } from "../LoginScreen/LoginScreen";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
	// console.log("props in homescreen", props);
	// console.log(user);
	// console.log("route in homescreen", route);
	// let fullName = props.extraData["fullName"];
	// console.log("route.params", route.params);
	// console.log("userContext in homescren", userContext);
	const handlePress = () => <Bladder />;
	// <userContext.Consumer>{console.log("user", context)}</userContext.Consumer>;
	return (
		<SafeAreaView style={styles.container}>
			{/* <userContext.Consumer>
				{(context) => <Text>{context}</Text>}
			</userContext.Consumer> */}
			<Text style={styles.baseText} onPress={handlePress}>
				Welcome to Pelvic Health Outcomes {"\n"}
			</Text>
			<View style={{ textAlign: "center" }}>
				<Text>
					{" "}
					Swipe right or {"\n"}
					{"\n"}
					<Button
						mode="contained"
						title="click here"
						color="#cd5c5c"
						onPress={() => navigation.openDrawer()}
					>
						Click Here
					</Button>
					{"\n"} {"\n"}to view the categories.
				</Text>
			</View>
			{/* <Image
				// resizeMode="repeat"
				style={{ height: 100, width: 100 }}
				source={require("../image7.png")} */}
			{/* /> */}
			<Button
				color="orange"
				title="click me"
				onPress={() => alert("button tapped")}
			>
				Click Me
			</Button>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
	// }
	// const [entityText, setEntityText] = useState("");
	// const [entities, setEntities] = useState([]);

	// const entityRef = firebase.firestore().collection("entities");
	// const userID = props.extraData.id;

	// useEffect(() => {
	// 	entityRef
	// 		.where("authorID", "==", userID)
	// 		.orderBy("createdAt", "desc")
	// 		.onSnapshot(
	// 			(querySnapshot) => {
	// 				const newEntities = [];
	// 				querySnapshot.forEach((doc) => {
	// 					const entity = doc.data();
	// 					entity.id = doc.id;
	// 					newEntities.push(entity);
	// 				});
	// 				setEntities(newEntities);
	// 			},
	// 			(error) => {
	// 				console.log(error);
	// 			}
	// 		);
	// }, []);

	// const onAddButtonPress = () => {
	// 	if (entityText && entityText.length > 0) {
	// 		const timestamp = firebase.firestore.FieldValue.serverTimestamp();
	// 		const data = {
	// 			text: entityText,
	// 			authorID: userID,
	// 			createdAt: timestamp,
	// 		};
	// 		entityRef
	// 			.add(data)
	// 			.then((_doc) => {
	// 				setEntityText("");
	// 				Keyboard.dismiss();
	// 			})
	// 			.catch((error) => {
	// 				alert(error);
	// 			});
	// 	}
	// };

	// const renderEntity = ({ item, index }) => {
	// 	return (
	// 		<View style={styles.entityContainer}>
	// 			<Text style={styles.entityText}>
	// 				{index}. {item.text}
	// 			</Text>
	// 		</View>
	// 	);
	// };

	// return (
	// 	<View style={styles.container}>
	// 		<View style={styles.formContainer}>
	// 			<TextInput
	// 				style={styles.input}
	// 				placeholder="Add new entity"
	// 				placeholderTextColor="#aaaaaa"
	// 				onChangeText={(text) => setEntityText(text)}
	// 				value={entityText}
	// 				underlineColorAndroid="transparent"
	// 				autoCapitalize="none"
	// 			/>
	// 			<TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
	// 				<Text style={styles.buttonText}>Add</Text>
	// 			</TouchableOpacity>
	// 		</View>
	// 		{entities && (
	// 			<View style={styles.listContainer}>
	// 				<FlatList
	// 					data={entities}
	// 					renderItem={renderEntity}
	// 					keyExtractor={(item) => item.id}
	// 					removeClippedSubviews={true}
	// 				/>
	// 			</View>
	// 		)}
	// 	</View>
	// );
}

export default function Apps(props) {
	// console.log("route.params", route.params);
	// console.log("props", props);
	// console.log("props.extraData", props.extraData);
	// let userId = props.extraData.fullName;

	let x = 1;
	const [user, setUser] = useState(props.extraData);
	console.log("user", { user });

	return (
		// <Provider>
		<NavigationContainer independent={true}>
			<Drawer.Navigator initialRouteName="NewHome" headerBackTitle="null">
				<Drawer.Screen
					name="NewHome"
					component={HomeScreen}
					// setParams={{ userId: props.extraData.id }}
				/>
				<Drawer.Screen name="bladder" component={BladderHome} />
				{/* component={BladderHome}
					initialParams={{ userId: props.extraData.id }} */}

				{/* /> */}
				{/* <Drawer.Screen name="q2" component={QuestionTwo} /> */}
			</Drawer.Navigator>
		</NavigationContainer>
		// </Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		fontSize: 40,
	},
	baseText: {
		fontFamily: "Cochin",
		fontSize: 30,
		textAlign: "center",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10,
	},
});
