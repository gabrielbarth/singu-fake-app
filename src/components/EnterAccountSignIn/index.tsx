import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { EIconPack } from '../../constants/enums/EIconPack';
import singuLogo from '../../assets/singu.png'

import { Button } from '../Button';

import { styles } from './styles';
import { colors } from '../../constants/theme/styleGuide';

type EnterAccountSignInComponentProps = {
  enterAction: () => void;
  enterFacebookAction: () => void;
  createAccountAction: () => void;
  beALady: () => void;
}

const EnterAccountSignIn = ({
  enterAction,
  enterFacebookAction,
  createAccountAction,
  beALady
}: EnterAccountSignInComponentProps) => {

  return (
    <View style={styles.container}>
      <Image source={singuLogo} resizeMode="contain" style={styles.image} />

      <View style={styles.content}>
        <View style={styles.buttonsContainer}>
          <Button
            title="Entrar"
            onPress={enterAction}
            iconColor="#FFFFFF"
            iconPack={EIconPack.IONICONS}
            iconName="enter-outline"
          />
          <Button
            title="Entrar com Facebook"
            onPress={enterFacebookAction}
            color="#4267B2"
            iconColor="#FFFFFF"
            iconPack={EIconPack.ENTYPO}
            iconName="facebook"
          />
          <Button
            title="Cadastrar-se"
            textColor="#000000"
            onPress={createAccountAction}
            color="#FFFFFF"
            iconColor={colors.dark.textMedim}
            iconPack={EIconPack.ANT_DESIGN}
            iconName="adduser"
          />

          <TouchableWithoutFeedback 
            style={styles.buttonBeLady}
            onPress={beALady}
          >
            <Text style={styles.textBeLady}>SEJA UMA PROFISSIONAL</Text>
          </TouchableWithoutFeedback>
        </View>

      </View>
    </View>
  )
}

export { EnterAccountSignIn };