import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray_background};
  border: 2px solid ${(props) => props.theme.colors.gray_background};
  margin: ${RFValue(8)}px 0;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.placeholder_text};

  margin-right: 16px;
`;

export const Input = styled(TextInput)`
  width: 100%;

  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
`;
