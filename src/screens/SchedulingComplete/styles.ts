import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  padding-top: 40px;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 40px;

  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const Message = styled.Text`
  margin-top: 16px;

  text-align: center;
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const Footer = styled.View`
  width: 100%;
  
  margin: 80px 0;

  align-items: center;
`;
