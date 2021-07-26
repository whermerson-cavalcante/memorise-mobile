import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, Title } from './styles'

interface Props extends TouchableOpacityProps {
  title: string;
  colms?: number;
}

export function FooterOption({ title, colms = 1, ...rest }: Props) {
  return (
    <Container colms={colms} >
      <Title>
        {title}
      </Title>
    </Container>
  );
}