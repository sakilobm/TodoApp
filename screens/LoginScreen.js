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
	LoginContainer,
	BackButton,
	LinearGradientStyle,
	HeadingContainer,
	Heading,
	SubHeading,
	InputContainer,
	BtnForgotContainer,
	ForgotButton,
	ButtonText,
	ButtonContainer,
	LoginButton,
	LoginButtonText,
	SignUpButton,
	SignButtonText,
	Input,
	colors,
} from "../styles/appStyles";
import Signup from "./SignupScreen";
import { AntDesign } from "@expo/vector-icons";
import { KeyboardAvoidingWrapper } from '../components/KeyboardAvoidingWrapper'

const Login = ({ navigation }) => {
	const [count, setCount] = useState([]);
	const onPress = () => setCount((prevCount) => prevCount + 1);

	return (
		<LoginContainer>
			{/* <KeyboardAvoidingWrapper> */}
			<LinearGradientStyle
				//"#1D4350", "#A43931"
				colors={["#7D0633", "#31112C"]}
				start={[0.6, 0.6]}
			>
				<BackButton
					onPress={() => navigation.goBack()}
				>
					<AntDesign name="leftcircle" size={34} color="white" />
				</BackButton>

				<Image
					source={require("../assets/logo.png")}
					style={{
						width: 100,
						height: 100,
						top: "2%",
						alignSelf: 'center',
						borderRadius: 29,
					}}
				/>
				<HeadingContainer>
					<Heading> Welcome Back! </Heading>
					<SubHeading>
						Login to enjoy your existant account
					</SubHeading>
				</HeadingContainer>
				<InputContainer>
					<Input
						textContentType={"emailAddress"}
						placeholderTextColor="#fff"
						placeholder={"Email"}
						selectionColor={colors.tertiary}
					></Input>
					<Input
						textContentType={"password"}
						secureTextEntry={true}
						placeholderTextColor="#fff"
						placeholder={"Password"}
						selectionColor="#fff"
					></Input>
				</InputContainer>
				<BtnForgotContainer>
					<ForgotButton onPress={onPress}>
						<ButtonText>Forgot Password</ButtonText>
					</ForgotButton>
				</BtnForgotContainer>
				<ButtonContainer>
					<LoginButton
						onPress={onPress}
					>
						<LoginButtonText>LOGIN</LoginButtonText>
					</LoginButton>
					<SignUpButton
						onPress={() => navigation.navigate(Signup)}
					>
						<SignButtonText>DON'T HAVE AN AN? SIGNUP</SignButtonText>
					</SignUpButton>
				</ButtonContainer>
			</LinearGradientStyle>
			{/* </KeyboardAvoidingWrapper> */}
		</LoginContainer>

	);
};
// const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const styles = StyleSheet.create({
	linearGradient: {
		flex: 1,
	},
	input: {
		alignItems: "center",
		margin: 15,
		paddingVertical: 12,
		paddingHorizontal: 12,
		borderRadius: 15,
		width: 300,
		borderWidth: 2,
		borderColor: "#fff",
	},

	inputContainer: {
		top: 55,
		alignItems: 'center',
		bottom: 20,
	},
});

export default Login;
