import React, { useEffect, useState } from 'react';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { FlatList, StatusBar } from 'react-native';

import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import {
  Container,
  Header,
  Title,
  SubTittle,
  Content,
  Appointments,
  AppointmentsTittle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from './styles';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/car';
import { LoadAnimation } from '../../components/LoadAnimation';

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function MyCars(){
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const navigation = useNavigation();


  function handleBack() {
    navigation.goBack();
  }


  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');

        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  },[])

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

        <SubTittle>
          Conforto, segurança e praticidade.
        </SubTittle>
      </Header>

      {
        loading ?
        <LoadAnimation /> :
        <Content>
          <Appointments>
            <AppointmentsTittle>Agendamentos feitos</AppointmentsTittle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>

          <FlatList 
            data={cars}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={12}
                      color={theme.colors.main}
                      style={{marginHorizontal: 10}}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
            showsVerticalScrollIndicator={false}
          />
        </Content>
      }
   </Container>
  );
}