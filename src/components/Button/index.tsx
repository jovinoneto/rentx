import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  Title
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  light?: boolean;
  loading?: boolean;
}

export function Button({
  title,
  light = false,
  loading = false,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container {...rest} >
      {
        loading ?
        <ActivityIndicator color={theme.colors.shape} /> :
        <Title light={light}>{title}</Title>
      }
    </Container>
  );
}