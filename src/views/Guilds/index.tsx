import React from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './styles';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

type Props = {
  handleGuildsSelected: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildsSelected }: Props) {
  const guilds = [
    { id: '1', name: 'Lendários', icon: 'image.png', owner: true },
    { id: '2', name: 'Fifa 2024', icon: 'image.png', owner: true },
    { id: '3', name: 'Fortnite', icon: 'image.png', owner: true },
    { id: '4', name: 'Lendários', icon: 'image.png', owner: true },
    { id: '5', name: 'Fifa 2024', icon: 'image.png', owner: true },
    { id: '6', name: 'Fortnite', icon: 'image.png', owner: true },
    { id: '7', name: 'Fortnite', icon: 'image.png', owner: true },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={guilds}
        renderItem={({ item }) => <Guild data={item} onPress={() => handleGuildsSelected(item)} />}
        ListHeaderComponent={()=> <ListDivider isCentered />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 68, paddingTop: 48}}
        style={styles.guilds}
      />
    </View>
  );
}
