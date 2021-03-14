import React, { useRef } from "react";
import { View } from "react-native";
import ViewPager from "@react-native-community/viewpager";

import Page from "./Page";
import Footer from "./Footer";

export const Onboarding = ({ navigation }) => {
	const pagerRef = useRef(null);

	const handlePageChange = (pageNumber) => {
		pagerRef.current.setPage(pageNumber);
	};
	return (
		<View style={{ flex: 1 }}>
			<ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
				<View key="1">
					<Page
						style={{ textAlign: "center" }}
						backgroundColor="steelblue"
						iconName="file-text"
						title="Welcome to Pelvic Health Outcomes"
					/>
					<Footer
						backgroundColor="midnightblue"
						rightButtonLabel="Next"
						rightButtonPress={() => {
							handlePageChange(1);
						}}
						leftButtonLabel="Back"
						leftButtonPress={() => {
							handlePageChange(0);
						}}
					/>
				</View>
				<View key="2">
					<Page
						backgroundColor="steelblue"
						iconName="home"
						title={`• Start at the home page ${"\n"} • Swipe right to view the categories on the left sidebar ${"\n"} • Click desired category`}
					/>
					<Footer
						backgroundColor="midnightblue"
						rightButtonLabel="Next"
						// rightButtonPress={() => true}
						rightButtonPress={() => {
							handlePageChange(2);
						}}
						leftButtonLabel="Back"
						leftButtonPress={() => {
							handlePageChange(0);
						}}
					/>
				</View>
				<View key="3">
					<Page
						backgroundColor="steelblue"
						iconName="at-sign"
						title={`• Enter provider's email ${"\n"} • Complete survey ${"\n"} • Click button to send results to provider ${"\n"} • Repeat as needed`}
					/>
					<Footer
						backgroundColor="midnightblue"
						rightButtonLabel="Next"
						rightButtonPress={() => navigation.navigate("Home")}
						leftButtonLabel="Back"
						leftButtonPress={() => {
							handlePageChange(1);
						}}
					/>
				</View>
			</ViewPager>
		</View>
	);
};
