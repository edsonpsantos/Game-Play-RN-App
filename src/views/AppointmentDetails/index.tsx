import React, { useEffect, useState } from 'react';
import { Alert, FlatList, ImageBackground, Platform, Share, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import { AppointmentProps } from '../../components/Appointment';
import { Member, MemberProps } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';
import { Load } from '../../components/Load';
import { api } from '../../services/api';

import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';
import { styles } from './styles';

type Params = {
  guildSelected: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
};

export function AppointmentDetails() {
  const route = useRoute();
  const { guildSelected } = route.params as Params;
  const [loading, setLoading] = useState(true);
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
      setWidget(response.data);
    } catch {
      Alert.alert('Verifique as configurações do servidor.\n Será que o Widget está ativo?');
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    const message = Platform.OS === 'ios' ? `Junte-se a ${guildSelected.guild.name}` : widget.instant_invite;
    Share.share({ message, url: widget.instant_invite });
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  return (
    <Background>
      <Header
        title={'Detalhes'}
        action={
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name='share' size={24} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>
      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader title='Jogadores' subtitle={`Total ${widget.presence_count}`} />

          <FlatList
            keyExtractor={(item) => item.id}
            style={styles.members}
            data={widget.members}
            renderItem={({ item }) => <Member key={item.id} data={item} />}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
          />
          {guildSelected.guild.owner && (
            <View style={styles.footer}>
              <ButtonIcon title='Entrar na partida' onPress={handleOpenGuild} />
            </View>
          )}
        </>
      )}
    </Background>
  );
}
