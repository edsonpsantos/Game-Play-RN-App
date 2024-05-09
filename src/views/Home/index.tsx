import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';

export function Home() {
  const [category, setCategory] = useState<string>('');
  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '06/05 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida...'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '2',
      date: '06/05 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida...'
    },
    {
      id: '3',
      guild: {
        id: '3',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '3',
      date: '06/05 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida...'
    }
  ];

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  const handleAppointmentDetails = () => {
    navigation.navigate('AppointmentDetails');
  };
  
  const handleAppointmentCreate = () => {
    navigation.navigate('AppointmentCreate');
  };

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />

      <View style={styles.content}>
        <ListHeader title='Partidas agendadas' subtitle='Total: 6' />
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          renderItem={({ item }) => <Appointment data={item} onPress={handleAppointmentDetails} />}
        />
      </View>
    </Background>
  );
}
