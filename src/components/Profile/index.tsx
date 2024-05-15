import React from 'react';
import { View, Text, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';
import { Avatar } from '../Avatar';
import { useAuth } from '../../hooks/auth';

export function Profile() {
  const avatarImage = 'https://avatars.githubusercontent.com/u/24628289?s=200&v=4';
  const { user, signOut } = useAuth();

  function handleSignOut() {
    Alert.prompt('Logout', 'Deseja realmente sair do GamePlay', [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        style: 'default',
        onPress: () => {
          signOut();
        }
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleSignOut}>
        {/* <Avatar urlImage={user.avatar} /> */}
        <Avatar urlImage={avatarImage} />
      </RectButton>
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
