import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import {
	BackButton,
	SignUpContainer,
	SignUpTitleContainer,
	LinearGradientStyle,
	SignUpHeading,
	SignUpSubHeading,
	SignUpInput,
	SignUpInputContainer,
	SignUpButtonContainer,
	SignButton,
	LoginButtonSignUpScreen,
	LoginButtonTextSignUpScreen,
	SignButtonTextSignUpScreen,
} from "../styles/appStyles";
import { LinearGradient } from "expo-linear-gradient";
import Login from "./LoginScreen";
import { AntDesign } from "@expo/vector-icons";
import { KeyboardAvoidingWrapper } from '../components/KeyboardAvoidingWrapper'

const Signup = ({ navigation }) => {
	const [count, setCount] = useState(0);
	const onPress = () => setCount((prevCount) => prevCount + 1);
	console.log(count);
	return (
		<SignUpContainer>
			<LinearGradientStyle
				colors={["#7D0633", "#31112C"]}
				start={[0.4, 0.1]}
			>
				<BackButton
					onPress={() => navigation.goBack()}
				>
					<AntDesign name="leftcircle" size={34} color="white" />
				</BackButton>

				<SignUpTitleContainer>
					<SignUpHeading> let's Get Started! </SignUpHeading>
					<SignUpSubHeading>
						Create an new acoount to get new features
					</SignUpSubHeading>
				</SignUpTitleContainer>
				<SignUpInputContainer>
					<SignUpInput
						textContentType={"name"}
						placeholderTextColor="#fff"
						placeholder={"Name"}
					></SignUpInput>
					<SignUpInput
						textContentType={"emailAddress"}
						placeholderTextColor="#fff"
						placeholder={"Email"}
					></SignUpInput>
					<SignUpInput
						textContentType={"newPassword"}
						placeholderTextColor="#fff"
						placeholder={"New Password"}
						secureTextEntry={true}
					></SignUpInput>
					<SignUpInput
						textContentType={"newPassword"}
						placeholderTextColor="#fff"
						placeholder={"Confirm Password"}
						secureTextEntry={true}
					></SignUpInput>
				</SignUpInputContainer>
				<SignUpButtonContainer>
					<SignButton
						onPress={() => onPress()}
					>
						<SignButtonTextSignUpScreen>SIGNUP</SignButtonTextSignUpScreen>
					</SignButton>
					<LoginButtonSignUpScreen
						onPress={() => navigation.navigate(Login)}
					>
						<LoginButtonTextSignUpScreen>DON'T HAVE AN ACCOUNT? LOGIN</LoginButtonTextSignUpScreen>
					</LoginButtonSignUpScreen>
				</SignUpButtonContainer>
			</LinearGradientStyle>
		</SignUpContainer>
	);
};
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		position: "absolute",
// 		width: "100%",
// 		height: "100%",
// 	},
// 	BackButton: {
// 		top: 30,
// 		left: 10,
// 	},
// 	headingContainer: {
// 		textAlign: "center",
// 		top: 15,
// 	},
// 	linearGradient: {
// 		flex: 1,
// 	},
// 	heading: {
// 		color: "#fff",
// 		marginTop: 30,
// 		textAlign: "center",
// 		fontSize: 26,
// 		fontWeight: "bold",
// 	},
// 	subHeading: {
// 		color: "#fff",
// 		marginTop: 10,
// 		textAlign: "center",
// 		fontSize: 16,
// 	},
// 	input: {
// 		alignItems: "center",
// 		marginTop: 22,
// 		paddingVertical: 12,
// 		paddingHorizontal: 12,
// 		borderRadius: 15,
// 		width: 300,
// 		borderWidth: 2,
// 		borderColor: "#fff",
// 	},

// 	inputContainer: {
// 		top: 30,
// 		alignItems: 'center',
// 		bottom: 20,
// 	},

// 	buttonContainer: {
// 		alignItems: "center",
// 		paddingTop: 60,
// 	},

// 	signButtonContainer: {
// 		alignItems: "center",
// 		backgroundColor: "#DDDDDD",
// 		padding: 10,
// 		width: 200,
// 		borderRadius: 10,
// 	},
// 	loginButtonContainer: {
// 		alignItems: "center",
// 		marginTop: 45,
// 	},
// 	loginButton: {
// 		color: "#fff",
// 		fontSize: 14,
// 		fontWeight: "bold",
// 	},
// 	signButton: {
// 		fontSize: 14,
// 		fontWeight: "bold",
// 	},
// });
export default Signup;
