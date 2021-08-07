import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { Icon } from '../Icon';
import { EIconPack } from '../../constants/enums/EIconPack';

import { styles } from './styles';

type ForwarderButtonComponentProps = {
  iconPack: string;
  iconName: string;
  title: string;
  action: () => void;
}

const ForwarderButton = ({ iconName, iconPack, title, action }: ForwarderButtonComponentProps) => {

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={action}
    >
      <View style={styles.content}>
        <View style={styles.label}>
          <Icon name={iconName} pack={iconPack} size={25} />
          <Text style={styles.text}>{title}</Text>
        </View>
        <Icon pack={EIconPack.ENTYPO} size={25} name="chevron-small-right" />
      </View>
    </TouchableOpacity>
  )
}

export { ForwarderButton };