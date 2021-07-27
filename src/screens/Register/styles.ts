import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;

  background-color: ${props => props.theme.colors.background};

  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;

  width: 100%;

  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(100)}px ${RFValue(40)}px;
  padding-bottom: ${RFValue(0)}px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.text};
`;

export const FormContainer = styled.View`
  width: 100%;
`;

export const InputsContainer = styled.View`
  width: 100%;
`;

export const FooterContainer = styled.View`
  width: 100%;

  border-top-width: 2px;
  border-color: ${props => props.theme.colors.gray_background};

  align-items: center;
  justify-content: center;

  padding: ${RFValue(20)}px 0;
`;
