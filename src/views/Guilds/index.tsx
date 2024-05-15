import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './styles';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';
import { discord } from '../../assets/discord.png';

type Props = {
  handleGuildsSelected: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildsSelected }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  const discordImage = discord;

  const guildsArray: GuildProps[] = [
    { id: '1', name: 'Lendários', icon: discordImage, owner: true },
    { id: '2', name: 'Fifa 2024', icon: discordImage, owner: true },
    { id: '3', name: 'Fortnite', icon: discordImage, owner: true },
    { id: '4', name: 'D&D', icon: discordImage, owner: true },
    { id: '5', name: 'Red Dead', icon: discordImage, owner: true },
    { id: '6', name: 'Fortnite', icon: discordImage, owner: true },
    { id: '7', name: 'Need for Speed', icon: discordImage, owner: true }
  ];

  const fetchGuilds = async () => {
    // const response = await api.get('/user/@me/guilds');
    // setGuilds(response.data);
    // setLoading(false);

    setTimeout(() => {
      setGuilds(guildsArray);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={guilds}
          renderItem={({ item }) => <Guild key={item.id} data={item} onPress={() => handleGuildsSelected(item)} />}
          ListHeaderComponent={() => <ListDivider isCentered />}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 68, paddingTop: 48 }}
          style={styles.guilds}
        />
      )}
    </View>
  );
}
