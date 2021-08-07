import React from 'react';
import { View } from 'react-native';

import { EIconPack } from '../../constants/enums/EIconPack';

import { ForwarderButton } from '../../components/ForwarderButton';

import { styles } from './styles';

const Help = () => {
  return (
    <View style={styles.container} >
      <ForwarderButton
        action={() => alert('não implementado..')}
        iconName="info-with-circle"
        iconPack={EIconPack.ENTYPO}
        title="Como funciona.."
      />
      <ForwarderButton
        action={() => alert('não implementado..')}
        iconName="question-circle-o"
        iconPack={EIconPack.FONT_AWESOME}
        title="Perguntas frequentes"
      />
      <ForwarderButton
        action={() => alert('não implementado..')}
        iconName="fingerprint"
        iconPack={EIconPack.FONT_AWESOME_5}
        title="Quero ser uma profissional Singu"
      />
      <ForwarderButton
        action={() => alert('não implementado..')}
        iconName="chat"
        iconPack={EIconPack.ENTYPO}
        title="Fale Conosco"
      />
      <ForwarderButton
        action={() => alert('não implementado..')}
        iconName="user-secret"
        iconPack={EIconPack.FONT_AWESOME}
        title="Política de privacidade"
      />
      <ForwarderButton
        action={() => alert('não implementado..')}
        iconName="book"
        iconPack={EIconPack.FONT_AWESOME}
        title="Termos de uso"
      />
    </View>
  )
}

export { Help };