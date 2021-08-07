import React from 'react';
import { ScrollView, TouchableWithoutFeedback, Image } from 'react-native';

import { styles } from './styles';

import { tipCardsFakeData } from '../../utils/tipCards';
import { CardTip } from '../CardTip';

// type CardTipSelectProps = {
//     onPress: () => void;
// }

const CardTipList = () => {

    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
        >
            {tipCardsFakeData.map(tip => (
                <TouchableWithoutFeedback  
                    key={tip.id} style={{width: '100%', flex: 1}} 
                    onPress={() => console.log('teste')}
                >
                    <CardTip order={tip.id}>
                        <Image source={tip.image} resizeMode={'contain'} />
                    </CardTip>
                </TouchableWithoutFeedback>
            ))}
        </ScrollView>
    )
};

export { CardTipList };