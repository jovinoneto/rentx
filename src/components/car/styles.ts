import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { RectButton } from "react-native-gesture-handler";


export const Container = styled(RectButton) `
  width: 100%;
  height: 126px;

  padding: 24px;
  margin-bottom: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Details = styled.View ``;

export const Brand = styled.Text `
  text-transform: uppercase;

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};

  color: ${({ theme }) => theme.colors.text_detail};
`;

export const Name = styled.Text `
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};

  color: ${({ theme }) => theme.colors.title};
`;

export const Abaout = styled.View `
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
`;

export const Rent = styled.View `
  margin-right: 24px;
`;

export const Period = styled.Text `
  text-transform: uppercase;

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};

  color: ${({ theme }) => theme.colors.text_detail};
`;

export const Price = styled.Text `
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};

  color: ${({ theme }) => theme.colors.main};
`;

export const Type = styled.View ``;

export const CarImage = styled.Image `
  width: 167px;
  height: 85px;
`;
