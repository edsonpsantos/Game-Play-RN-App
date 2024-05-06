import { FlatList, ImageBackground, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import BannerImg from '../../assets/banner.png';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      userName: 'Jabba The Huu',
      avatar_url: 'https://upload.wikimedia.org/wikipedia/pt/8/87/Jabba_the_Hutt.png',
      status: 'online'
    },
    {
      id: '2',
      userName: 'Mestre Yoda',
      avatar_url: 'https://cdn.pixabay.com/photo/2020/02/14/12/52/yoda-4848415_1280.png',
      status: 'offline'
    },
    {
      id: '3',
      userName: 'Obi Wan Kenobi',
      avatar_url: 'https://cdn.pixabay.com/photo/2023/01/16/18/34/ki-generated-7723048_1280.jpg',
      status: 'online'
    }
  ];

  return (
    <Background>
      <Header
        title={'Detalhes'}
        action={
          <BorderlessButton>
            <Fontisto name='share' size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida.</Text>
        </View>
      </ImageBackground>

      <ListHeader title='Jogadores' subtitle='Total 3' />

      <FlatList
        keyExtractor={(item) => item.id}
        style={styles.members}
        data={members}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
      />
      <View style={styles.footer}>
        <ButtonIcon title='Entrar na partida' />
      </View>
    </Background>
  );
}
