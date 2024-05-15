import React, { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { styles } from './styles';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { Load } from '../../components/Load';

export function Home() {
  const [category, setCategory] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  const navigation = useNavigation();

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  const handleAppointmentDetails = (guildSelected: AppointmentProps) => {
    navigation.navigate('AppointmentDetails', { guildSelected });
  };

  const handleAppointmentCreate = () => {
    navigation.navigate('AppointmentCreate');
  };

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd iconPlus onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader title='Partidas agendadas' subtitle={`Total ${appointments.length}`} />
          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              if (!item.id) {
                return null; // ou qualquer outra ação para lidar com o item sem 'id'
              }
              return <Appointment data={item} onPress={() => handleAppointmentDetails(item)} />;
            }}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            contentContainerStyle={{ paddingBottom: 69 }}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </Background>
  );
}
