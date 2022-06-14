import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import { FlatList, FlatListProps } from 'react-native';

import { CarDTO } from '../../dtos/CarDTO';
import Animated from 'react-native-reanimated';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;

  padding: 32px 24px;

  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};;
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(
  FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>
  ).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false
})``;

export const MyCarsWrapper = styled.View`
  
`;

export const MyCarsButton = styled(ButtonAnimated)`
  width: 60px;
  height: 60px;
  border-radius: 30px;

  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 13px;
  right: 22px;

  background-color: ${({ theme }) => theme.colors.main};
`;