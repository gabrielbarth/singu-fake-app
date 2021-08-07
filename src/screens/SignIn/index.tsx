import React from 'react';
import { View, ImageBackground } from 'react-native';

import wallpaperImg from '../../assets/manicureWallpaper.jpg';
import { EnterAccountSignIn } from '../../components/EnterAccountSignIn';

import { styles } from './styles';

const SignIn = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={{ uri: 'https://singu.com.br/assets/images/debora.png'}}
      style={styles.container}
      blurRadius={1}
      imageStyle={{ opacity: 0.8 }}
    >
      <View style={styles.content}>
        <EnterAccountSignIn
          enterAction={() => { navigation.navigate('Main', { screen: 'Services' }) }}
          enterFacebookAction={() => { navigation.navigate('Main', { screen: 'Services' }) }}
          createAccountAction={() => { navigation.navigate('Main', { screen: 'Services' }) }}
          beALady={() => { navigation.navigate('Main', { screen: 'Services' }) }}
        />
      </View>
    </ImageBackground>
  )
}

export { SignIn };