import styled from "styled-components/native";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native";
// Colors
export const colors = {
  primary: "#332424",
  secondary: "#4D3636",
  tertiary: "#E6E6E6",
  alternative: "#999999",
  //myColors
  skyblue: "#082032",
  secsky: "#2C394B",
  tersky: "#C2FFF9",
  dark: "#000000",
  //backups
  // skyblue: "#009DAE",
  // secsky: "#71DFE7",
  // tersky: "#C2FFF9",
  // dark: "#000000"
};

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.SafeAreaView`
  background-color: ${colors.primary};
  padding: 20px;
  padding-bottom: 0px;
  flex: 1;
  padding-top: ${statusBarHeight}px;
`;

// Header
export const HeaderView = styled.View`
  top: 40px;
  padding: 10px;
  margin-bottom: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${colors.tertiary};
  letter-spacing: 2px;
  font-style: italic;
`;
export const HeaderButton = styled.TouchableOpacity`
  font-weight: bold;
  color: ${colors.tertiary};
`;

// List
export const ListContainer = styled.View`
  margin-bottom: 30px;
  flex: 1;
  padding-bottom: 45px;
`;

export const ListView = styled.TouchableHighlight`
  background-color: ${colors.secondary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: space-around;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const ListViewHidden = styled.View`
  background-color: ${colors.tertiary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  border-radius: 11px;
`;

export const HiddenButton = styled.TouchableOpacity`
  width: 55px;
  align-items: center;
`;

export const TodoText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  color: ${colors.tertiary};
`;

export const TodoDate = styled.Text`
  font-size: 10px;
  letter-spacing: 1px;
  color: ${colors.tertiary};
  text-align: right;
  text-transform: uppercase;
`;

// Text for swiped todo row
export const SwipedTodoText = styled(TodoText)`
  color: ${colors.alternative};
  font-style: italic;
  text-decoration: line-through;
`;

// Modal
export const ModalButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${colors.tertiary};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  bottom: 15px;
`;

export const ModalContainer = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${colors.primary};
`;

export const ModalView = styled.View`
  background-color: ${colors.secondary};
  border-radius: 20px;
  padding: 35px;
`;

export const StyledInput = styled.TextInput`
  width: 300px;
  height: 50px;
  background-color: ${colors.tertiary};
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  color: ${colors.secondary};
  letter-spacing: 1px;
`;

export const ModalAction = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.color};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ModalActionGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;

export const ModalIcon = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;
export const TopBarTitle = styled.Text`
  text-align: center;
  font-size: 34px;
  font-weight: bold;
  color: ${colors.primary};
`;
export const TopBar = styled.View`
  top: 30px;
  height: 50px;
  border-radius: 8px;
  background-color: ${colors.tertiary};
`;
export const Profile = styled.TouchableOpacity`
  left: 85%;
  bottom: 85%;
`;

//....................Login Screen Css..............................
export const LoginContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const BackButton = styled.TouchableOpacity`
  top: 30px;
  left: 10px;
`;
export const HeadingContainer = styled.View`
  text-align: center;
  left: 10px;
`;
export const LinearGradientStyle = styled(LinearGradient)`
  flex: 1;
`;
export const Heading = styled.Text`
  color: white;
  margin-top: 30px;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
`;
export const SubHeading = styled.Text`
  color: white;
  margin-top: 5px;
  text-align: center;
  font-size: 16px;
`;
export const Input = styled(TextInput)`
  align-items: center;
  margin: 15px;
  font-size: 16px;
  border-radius: 15px;
  width: 300px;
  border-width: 2px;
  border-color: white;
  padding: 10px;
  height: 50px;
  /* background-color: white; */
  letter-spacing: 1px;
`;
export const InputContainer = styled.View`
  top: 55px;
  align-items: center;
  bottom: 20px;
`;
export const ButtonContainer = styled.View`
  align-items: center;
  top: 100px;
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;
export const LoginButton = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
  width: 200px;
  border-radius: 10px;
  background-color: white;
`;
export const SignUpButton = styled.TouchableOpacity`
  align-items: center;
  margin-top: 22px;
`;
export const LoginButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
export const SignButtonText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;
export const ForgotButton = styled.TouchableOpacity`
  top: 70px;
  align-items: center;
`;
export const BtnForgotContainer = styled.View`
  margin-right: 15px;
`;
//...................................................
//.................Signup Css........................
//...................................................
export const SignUpContainer = styled.View`
  flex: 1px;
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const SignUpTitleContainer = styled.View`
  text-align: center;
  top: 15px;
`;
export const SignUpHeading = styled.Text`
  color: white;
  margin-top: 30px;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
`
export const SignUpSubHeading = styled.Text`
  color: white;
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
`;
export const SignUpInput = styled(TextInput)`
  align-items: center;
  margin-top: 22px;
  border-radius: 15px;
  width: 300px;
  border-width: 2px;
  border-color: white;
  padding: 15px;
  height: 50px;
  letter-spacing: 1px;
`;
export const SignUpInputContainer = styled.View`
  top: 30px;
  padding: 15px;
  align-items: center;
  bottom: 20px;
`;
export const SignUpButtonContainer = styled.View`
  align-items: center;
  padding-top: 60px;
`;

export const SignButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #ddd;
  padding: 10px;
  width: 200px;
  border-radius: 10px;
`
export const LoginButtonSignUpScreen = styled.TouchableOpacity`
  align-items: center;
  margin-top: 45px;
`;

export const LoginButtonTextSignUpScreen = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;
export const SignButtonTextSignUpScreen = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;