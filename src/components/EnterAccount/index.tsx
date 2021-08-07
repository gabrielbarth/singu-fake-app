import React from 'react';
import { View, Text } from 'react-native';

import { Icon } from '../Icon';
import { EIconPack } from '../../constants/enums/EIconPack';

import { styles } from './styles';
import { Button } from '../Button';
import { colors } from '../../constants/theme/styleGuide';

type EnterAccountComponentProps = {
  action: () => void;
}

const EnterAccount = ({ action }: EnterAccountComponentProps) => {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.icon}>
          <Icon pack={EIconPack.FONT_AWESOME} size={25} color={colors.primary} name="user-circle-o" />
        </View>
        <Text style={styles.text}>Faça login para continuar</Text>
        <Text style={styles.textNode}>
          Você precisa entrar no app para aproveitar todo o nosso conteudo
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="ENTRAR" onPress={action} />
      </View>
    </View>
  )
}

export { EnterAccount };