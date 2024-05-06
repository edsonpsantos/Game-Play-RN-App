import { Image } from 'react-native';
import { styles } from './styles';

export function GuildIcon() {
  const uri ='https://picsum.photos/200/300';

  return <Image source={{ uri }} style={styles.image} resizeMode='cover' />;
}
