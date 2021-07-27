import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View<InputProps>`
  width: 100%;
  padding: ${RFValue(16)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${(props) => props.theme.colors.gray_background};
  border: 2px solid ${(props) => props.theme.colors.gray_background};


  ${props => props.isFocused && css`
    border-color: ${props.theme.colors.text};
  `};

  margin: ${RFValue(8)}px 0;
`;

export const Icon = styled(Feather)<InputProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.regular}; 
  color: ${(props) => props.theme.colors.placeholder_text};

  ${props => props.isFocused && css`
    color: ${props.theme.colors.text};
  `};

  ${props => props.isFilled && css`
    color: ${props.theme.colors.text};
  `};

  margin-right: 16px;
`;

export const Input = styled(TextInput)`
  width: 100%;

  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  background: transparent;
`;
