import React, { useState } from 'react';

import { format } from 'date-fns';
import { Alert, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { getPlatformDate } from '../../utils/getPlatformDate';
import { Params } from '../../dtos/CarDTO';
import ArrowSVG from '../../assets/arrow.svg'
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  DateValueContainer,
  Content,
  Footer,
} from './styles';

import { generateInterval } from '../../components/Calendar/generateInterval';
import { Calendar, DayPros, MarkedDateProps } from '../../components/Calendar';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayPros>({} as DayPros);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  function handleConfirmPeriod() {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert('Período não selecionado!');
    } else {
      navigation.navigate('SchedulingDetails', {
        car,
        dates: Object.keys(markedDates)
      });
    }
  }

  function handleChangeDate(date: DayPros) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    });
  }

  

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton
          onPress={handleBack}
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle >DE</DateTitle>
            <DateValueContainer selected={!!rentalPeriod.startFormatted}>
              <DateValue>{rentalPeriod.startFormatted}</DateValue>
            </DateValueContainer>
          </DateInfo>
          
          <ArrowSVG />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueContainer selected={!!rentalPeriod.endFormatted}>
              <DateValue>{rentalPeriod.endFormatted}</DateValue>
            </DateValueContainer>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>
      <Footer>
        <Button
          title="Confirmar" 
          onPress={handleConfirmPeriod}
          enabled={!!rentalPeriod.startFormatted}
        />
      </Footer>
    </Container>
  );
}