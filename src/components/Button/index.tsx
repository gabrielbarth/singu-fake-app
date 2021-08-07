import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

import { colors } from '../../constants/theme/styleGuide';

import { styles } from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Icon } from '../Icon';

type ButtonComponentProps = GenericTouchableProps & {
  iconPack?: string;
  iconName?: string;
  title: string;
  textColor?: string;
  iconColor?: string;
  color?: string;
}

const Button = ({ iconName, iconPack, title, textColor, iconColor, color, onPress }: ButtonComponentProps) => {
  const { primaryGradientBottonLeft, primaryGradientTopRight } = colors;

  const renderedColors = color
    ? [color, color]
    : [primaryGradientBottonLeft, primaryGradientTopRight]

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={onPress}
    >
      <LinearGradient
        colors={renderedColors}
        style={[styles.button, { justifyContent: iconName ? 'space-between' : 'center' }]}
        locations={[0.1, 1]}
        end={{ x: 2, y: 1 }}
      >
        {iconName &&
          <View style={styles.iconContent}>
            <Icon size={25} name={iconName} pack={iconPack} color={iconColor} />
          </View>
        }
        <Text style={[styles.textButton, { color: textColor ?? '#FFFFFF' }]}>
          {title}
        </Text>
        {iconName &&
          <View style={styles.iconContent} />
        }
      </LinearGradient>
    </TouchableWithoutFeedback>

  )

}

export { Button };