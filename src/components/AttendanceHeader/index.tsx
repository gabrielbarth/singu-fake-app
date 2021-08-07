import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { Icon } from '../Icon';
import { EIconPack } from '../../constants/enums/EIconPack';

import { styles } from './styles';

type AttendanceHeaderComponentProps = {
  setToggle: () => void;
}

const AttendanceHeader = ({ setToggle } : AttendanceHeaderComponentProps) => {

  return (
    <TouchableOpacity 
      style={styles.container} 
      activeOpacity={0.9} 
      onPress={setToggle}
    >
      <View style={styles.content}>
        <Text style={styles.text} >Onde será o atendimento?</Text>
        <Icon pack={EIconPack.ENTYPO} size={25}  name="chevron-small-down" />
      </View>
    </TouchableOpacity>
  )
}

export { AttendanceHeader };