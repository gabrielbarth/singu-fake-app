import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { AttendanceHeader } from '../../components/AttendanceHeader';
import { CardServiceList } from '../../components/CardServiceList';
import { CardTipList } from '../../components/CardTipList';

import { getSevices } from '../../services/httpRequests/services';
import { ApiResponse, BeautyService } from '../../utils/dataTypes';
import { separeteServicesByCategory } from '../../utils/separateServicesByCategory';

import { styles } from './styles';

const Services = () => {
  const [toggleAttendanceAddress, setToggleAttendanceAddress] = useState<boolean>(false);
  const [formattedServices, setFormattedServices] = useState<any[]>([]);

  const getBeautyServices = async () => {
    try {
      const beautyServices = await getSevices() as ApiResponse<BeautyService[]>;

      if(beautyServices.errors.length > 0)
        console.log('ERROR', beautyServices.errors.toString());

      const servicesByCategory = separeteServicesByCategory(beautyServices.data) as any;
      setFormattedServices(servicesByCategory);
      
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    getBeautyServices();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <AttendanceHeader
        setToggle={() => alert('não implementado..')}
      />
      <CardTipList />

      {formattedServices?.map((data, index) => (
        <React.Fragment key={index}>
          <Text style={{ marginHorizontal: 15, paddingTop: 10 }}>{data.category}</Text>
          <CardServiceList beautyServices={data.services} />
        </React.Fragment>
      ))}
    </ScrollView>
  )
}

export { Services };