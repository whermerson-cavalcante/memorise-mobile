import React from 'react'
import { TextInputProps } from 'react-native';

import { Feather } from '@expo/vector-icons'

import { Container, Icon, Input as TextInput } from './styles'
import theme from '../../global/theme';

interface Props extends TextInputProps {
  name: string;
  icon?: React.ComponentProps<typeof Feather>['name'];
}

export function Input({ name, icon, ...rest }: Props) {
  return (
    <Container>
      { icon && <Icon name={icon} size={20} /> }
      <TextInput 
        {...rest}
        placeholderTextColor={theme.colors.placeholder_text}
      />
    </Container>
  );
}