import React, { useEffect, useState } from "react";
import {
	FlatList,
	Keyboard,
	Text,
	TextInput,
	TouchableOpacity,
	Button,
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
import Bladder from "../Bladder";
import QuestionTwo from "../bladderquestions/QuestionTwo";
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
	// console.log("props.", props);
	// console.log("route.params", route.params);
	const handlePress = () => <Bladder />;
	return (
		<SafeAreaView style={styles.container}>
			<Text numberOfLines={1} onPress={handlePress}>
				Test your pelvic health knowledge!
			</Text>
			<Text>
				{" "}
				Swipe right or
				<Button title="click here" onPress={() => navigation.openDrawer()} /> to
				view the quizzes!
			</Text>
			<Image
				// resizeMode="repeat"
				style={{ height: 100, width: 100 }}
				source={require("../image7.png")}
			/>
			<Text>Yo</Text>
			<Button
				color="orange"
				title="click me"
				onPress={() => alert("button tapped")}
			/>
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

export default function Apps(props, { route }) {
	// console.log("route.params", route.params);
	// console.log("props", props);
	let x = 1;

	return (
		// <NavigationContainer independent={true}>
		// 	<NavigationContainer independent={true}>
		// 		<Stack.Navigator>
		// 			<Stack.Screen name="q2" component={QuestionTwo} />
		// 			<Stack.Screen
		// 				name="bladder"
		// 				component={Bladder}
		// 				options={{ title: "Bladder Quiz" }}
		// 			/>
		// 		</Stack.Navigator>
		// 	</NavigationContainer>
		<NavigationContainer independent={true}>
			<Drawer.Navigator initialRouteName="NewHome">
				<Drawer.Screen
					name="NewHome"
					component={HomeScreen}
					userId={props.extraData.id}
				/>
				<Drawer.Screen
					name="bladder"
					component={Bladder}
					userId={props.extraData.id}
				/>
				{/* <Drawer.Screen name="q2" component={QuestionTwo} /> */}
			</Drawer.Navigator>
		</NavigationContainer>
		// </NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
