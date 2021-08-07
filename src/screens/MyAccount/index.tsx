import React from 'react';
import { View, ImageBackground } from 'react-native';

import wallpaperImg from '../../assets/manicureWallpaper.jpg';
import { EnterAccount } from '../../components/EnterAccount';

import { styles } from './styles';

const MyAccount = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={wallpaperImg}
      style={styles.container}
      blurRadius={1}
      imageStyle={{ opacity: 0.6 }}
    >
      <View style={styles.content}>
        <EnterAccount action={() => { navigation.navigate('Auth', { screen: 'SignIn' }) }} />
      </View>
    </ImageBackground>
  )
}

export { MyAccount };