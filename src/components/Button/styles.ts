import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  width: 100%;
  padding: ${RFValue(16)}px;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.primary};

  margin: ${RFValue(8)}px 0;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${props => props.theme.fonts.medium};

  color: ${props => props.theme.colors.text};
`;
