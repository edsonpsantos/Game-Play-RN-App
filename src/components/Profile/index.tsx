import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Avatar } from '../Avatar';
import { useAuth } from '../../hooks/auth';

export function Profile() {
  const avatarImage = 'https://avatars.githubusercontent.com/u/24628289?s=200&v=4';
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      {/* <Avatar urlImage={user.avatar} /> */}
      <Avatar urlImage={avatarImage} />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá, José</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
