import React from 'react';
import { ScrollView, Alert } from 'react-native';

import { CardService } from '../CardService';

import { BeautyService } from '../../utils/dataTypes';
import { styles } from './styles';

const CardServiceList = ({ beautyServices }: any) => {

    const onSelect = (service: any) => {
        Alert.alert(
            "Dados do serviço selecionado",
            `Categoria: ${service.category}\nDescrição: ${service.description}\nObservação: ${service.observation}\n`,
            [
                {
                    text: 'Fechar',
                    onPress: () => { }
                },
                {
                    text: 'Solicitar',
                    onPress: () => onConfirm()
                }
            ]
        );
    }

    const onConfirm = () => { alert('Funcionalidade não implementada.') }

    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
        >
            {beautyServices.map((service: BeautyService) => (
                <CardService
                    key={service._id}
                    imageUrl={service.imageUrl}
                    description={service.description}
                    observation={service.observation}
                    onSelect={() => onSelect(service)}
                />
            ))}
        </ScrollView>
    )
};

export { CardServiceList };