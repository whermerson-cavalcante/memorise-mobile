import styled from 'styled-components/native'

import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

interface IContainerProps {
  colms: number;
}

export const Container = styled(TouchableOpacity)<IContainerProps>`
  width: ${props => props.colms === 1 ? '100%' : '50%'};

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${props => props.theme.fonts.bold};
  
  color: ${props => props.theme.colors.text};
`;