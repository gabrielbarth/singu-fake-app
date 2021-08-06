import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors} from '../../constants/theme/styleGuide';

import { styles } from './styles';

type CardTipComponentProps = {
  children: ReactNode;
}

const CardTip = ({ children }: CardTipComponentProps) => {
  const { primaryGradientBottonLeft, primaryGradientTopRight} = colors;

  return (
    <LinearGradient
      colors={[primaryGradientBottonLeft, primaryGradientTopRight]}
      style={styles.container}
      locations={[0.1, 1]}
      end={{ x: 2, y: 1}}
    >
      {children}
    </LinearGradient>
  )
}

export { CardTip };