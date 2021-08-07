import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

import lostMan from '../../assets/lost.gif';

const Orders = () => {
  return (
    <View style={styles.container}>
      <Image source={lostMan} resizeMode="cover" />
    </View>
  )
}

export { Orders };