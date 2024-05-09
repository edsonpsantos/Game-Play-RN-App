import React from 'react';
import { Image, View } from 'react-native';

import DiscordImg from "../../assets/discord.svg";
import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://picsum.photos/200/300';

  return (
    <View style={styles.container}>
      {/* <Image source={{ uri }} style={styles.image} resizeMode='cover' />; */}
      <DiscordImg width={40} height={40}/>

    </View>
  );
}
