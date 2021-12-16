import React from 'react'

//Styled Components
import {
    HeaderView,
    HeaderTitle,
    HeaderButton,
    colors,
} from "../styles/appStyles";

import { Entypo } from "@expo/vector-icons";

const Header = ({ handleClearTodos }) => {
    return (
        <HeaderView>
            <HeaderTitle>ToDos</HeaderTitle>
            <HeaderButton
                onPress={handleClearTodos}
            >
                <Entypo name="trash" size={25} color={colors.tertiary} />
            </HeaderButton>
        </HeaderView>
    );
}
export default Header;