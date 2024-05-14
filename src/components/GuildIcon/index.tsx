import React from 'react';
import { Image, View } from 'react-native';

import DiscordImg from '../../assets/discord.svg';
import { discord } from '../../assets/discord.png';

import { styles } from './styles';

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
};

export function GuildIcon({ guildId, iconId }: Props) {
  // const uri = 'https://picsum.photos/200/300';

  // const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
  const uri = discord


  return (
    <View style={styles.container}>
      {iconId ? (
        <Image source={uri} style={styles.image} resizeMode='cover' />
      ) : (
        <DiscordImg width={40} height={40} />
      )}
    </View>
  );
}
