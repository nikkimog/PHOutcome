// import * as firebase from "firebase";
import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBWJ_IvfhXdJsUBvHHIhXtMP3e70-YchW8",
	authDomain: "bladder-diary-d8d19.firebaseapp.com",
	databaseURL: "https://bladder-diary-d8d19.firebaseio.com",
	projectId: "bladder-diary-d8d19",
	storageBucket: "bladder-diary-d8d19.appspot.com",
	messagingSenderId: "217100079341",
	appId: "1:217100079341:ios:7f7f82c7252b0d35467ce4",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export { firebase };
