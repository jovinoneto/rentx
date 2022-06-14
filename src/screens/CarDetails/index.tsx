import React, { useState } from 'react';

import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StatusBar, StyleSheet } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { Params } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import {
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from './styles';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

export function CarDetails(){
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  const theme = useTheme();

  const statusBarHeight = getStatusBarHeight();
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, statusBarHeight + 10],
        Extrapolate.CLAMP
      ),

    };
  });
  
  const imageStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 200],
        [1, 0],
        Extrapolate.CLAMP
      ),
    };
  });

  function handleSelectPeriod() {
    navigation.navigate('Scheduling', { car });
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Animated.View style={[
        headerStyleAnimation,
        styles.header,
        { backgroundColor: theme.colors.background_secondary}
        ]}>
      <Header>
        <BackButton onPress={handleBack}/>
      </Header>

        <Animated.View style={imageStyleAnimation}>
          <CarImages>
            <ImageSlider
              imagesUrl={car.photos}
            />
          </CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        onScroll={scrollHandler}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 180
        }}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {
            car.accessories.map(accessory => (
              <Accessory
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)} 
              />
            ))
          }
          
        </Accessories>

        <About>
        {car.about}
        {car.about}
        {car.about}
        {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>

      <Footer>
        <Button title="Selecionar período do aluguel" onPress={handleSelectPeriod} />
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  },
})