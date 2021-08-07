import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors } from '../../constants/theme/styleGuide';

import { styles } from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

type CardTipComponentProps = {
  children: ReactNode;
  order: string;
}

const CardTip = ({ order, children }: CardTipComponentProps) => {
  const { primaryGradientBottonLeft, primaryGradientTopRight } = colors;

  const renderedColors = (parseInt(order) % 2 != 0)
    ? [primaryGradientBottonLeft, primaryGradientTopRight]
    : ['#FFFFFF', '#F2F2F2']

  return (
    <TouchableWithoutFeedback 
      style={styles.container}
      onPress={() => alert('não implementado..')}
    >
      <LinearGradient
        colors={renderedColors}
        style={styles.card}
        locations={[0.1, 1]}
        end={{ x: 2, y: 1 }}
      >
        {children}
      </LinearGradient>
    </TouchableWithoutFeedback>

  )

}

export { CardTip };