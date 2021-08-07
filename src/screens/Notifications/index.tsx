import React from 'react';
import { View, Image } from 'react-native';

import lostMan from '../../assets/lost.gif';

import { styles } from './styles';

const Notifications = () => {
  return (
    <View style={styles.container}>
      {[...Array(21)].map((_, index) => (
        <Image key={index} source={lostMan} style={styles.image} resizeMode="cover" />
      ))}
    </View>
  )
}

export { Notifications };