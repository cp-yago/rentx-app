import React from 'react';
import { Image, Text, View } from 'react-native';
import LancerImg from '../../assets/images/cars/Lancer.png';

import styles from './styles';

const CarCardComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.carInfoContainer}>
        <Text style={styles.carBrand}>MITSUBISHI</Text>
        <Text style={styles.carName}>Lancer Evo X</Text>
        <Text style={styles.rentalPeriod}>POR 3 DIAS</Text>
        <Text style={styles.rentalTotal}>R$ 290</Text>
      </View>
      <View style={styles.carPhotoContainer}>
        <Image source={LancerImg} style={styles.carImg} />
      </View>
    </View>
  );
};

export default CarCardComponent;
