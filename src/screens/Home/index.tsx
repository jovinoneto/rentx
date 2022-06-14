import React, { useEffect, useState } from 'react';

import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BackHandler, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { PanGestureHandler, RectButtonProps } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

import Logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import {
  CarList,
  Container,
  Header,
  TotalCars,
  MyCarsButton,
} from './styles';
import { Car } from '../../components/car';
import { LoadAnimation } from '../../components/LoadAnimation';

interface Props extends RectButtonProps {
}

export function Home(){
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  
  const theme = useTheme();
  const navigation = useNavigation();

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: positionY.value},
        {translateX: positionX.value}
      ]
    }
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionY = positionY.value;
      ctx.positionX = positionX.value;
    },
    onActive(event, ctx: any) {
      positionY.value = ctx.positionY + event.translationY;
      positionX.value = ctx.positionX + event.translationX;
    },
    onEnd() {
      positionY.value = withSpring(0);
      positionX.value = withSpring(0);
    }
  });

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  function handleOpenMyCars() {
    navigation.navigate('MyCars');
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');

        setCars(response.data);
      } catch (error) {
        console.log(error);
        
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  },[]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
  },[]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Logo 
          width={RFValue(108)}
          height={RFValue(12)}
        />
        {
          !loading &&
          <TotalCars>Total de {cars.length} carros</TotalCars>
        }
      </Header>

      { 
        loading ?
        <LoadAnimation /> :
        <CarList 
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Car data={item} onPress={() => handleCarDetails(item)} />
          }
        />
      }

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: 'absolute',
              bottom: 13,
              right: 22
            }
          ]}
        >
          <MyCarsButton onPress={handleOpenMyCars}>
            <Ionicons
              name="ios-car-sport"
              size={32}
              color={theme.colors.shape}
            />
          </MyCarsButton>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}

