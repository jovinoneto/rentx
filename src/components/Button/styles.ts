import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps {
  color?: string;
}

interface ButtonTextProps {
  light?: boolean;
}

export const Container = styled(RectButton)<ButtonProps> `
  width: 100%;

  padding: 19px;
  align-items: center;
  justify-content: center;
  
  opacity: ${({ enabled = true }) => enabled ? 1 : 0.5};
  
  background-color: ${({ color, theme }) => color ? color : theme.colors.main};
`;

export const Title = styled.Text<ButtonTextProps>`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme, light }) => light ? theme.colors.header : theme.colors.shape};
`;
