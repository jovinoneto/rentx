import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;

  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const Title = styled.Text`
  margin-top: 24px;
  
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const SubTittle = styled.Text`
  margin-top: 24px;
  
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`;

export const Appointments = styled.View`
  width: 100%;
  padding: 24px 0;
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AppointmentsTittle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const AppointmentsQuantity = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const CarWrapper = styled.View`
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  width: 100%;

  padding: 12px;
  margin-top: -10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const CarFooterTitle = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`; 

export const CarFooterDate = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;