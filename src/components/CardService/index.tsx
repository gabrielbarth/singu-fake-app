import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { colors } from '../../constants/theme/styleGuide';

import { styles } from './styles';

type CardServiceComponentProps = {
  description: string;
  observation: string;
  imageUrl?: string;
  onSelect: () => void;
}

const CardService = ({ description, observation, imageUrl, onSelect }: CardServiceComponentProps) => {
  const { primaryGradientBottonLeft, primaryGradientTopRight } = colors;

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={onSelect}
    >
      <LinearGradient
        colors={[primaryGradientBottonLeft, primaryGradientTopRight]}
        style={styles.cardLeft}
        locations={[0.1, 1]}
        end={{ x: 2, y: 1 }}
      >
        <Image
          style={{ flex: 1, width: '100%' }}
          resizeMode="contain"
          source={{ uri: imageUrl ?? 'https://singu.com.br/assets/images/debora.png' }}
        />
      </LinearGradient>
      <View style={styles.cardRight}>
        <Text style={styles.textService}>{description}</Text>
        <Text style={styles.textPrice}>{observation}</Text>
      </View>
    </TouchableWithoutFeedback>

  )

}

export { CardService };