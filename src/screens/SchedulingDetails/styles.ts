import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  
  margin-top: ${getStatusBarHeight() + 18}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-left: 24px;
`;

export const CarImages = styled.View`
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center'
  }
})`
`;

export const Details = styled.View`
  width: 100%;

  margin-top: 38px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  text-transform: uppercase;

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const Name = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  text-transform: uppercase;

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const Price = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
`;

export const Accessories = styled.View`
  width: 100%;

  margin-top: 16px;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;


export const RentalPeriod = styled.View`
  width: 100%;

  margin-top: 40px;
  padding-bottom: 16px;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const CalendarIcon = styled.View`
  width: 48px;
  height: 48px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.main};
`;

export const DateInfo = styled.View`
`;

export const DateTitle = styled.Text`
  text-transform: uppercase;

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const DateValue = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const RentalPriceLabel = styled.Text`
  text-transform: uppercase;

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const RentalPriceDetails = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RentalPriceQuota = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const RentalPriceTotal = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.success};
`;


export const Footer = styled.View `
  width: 100%;

  padding: 24px 24px ${getBottomSpace() + 24}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;
