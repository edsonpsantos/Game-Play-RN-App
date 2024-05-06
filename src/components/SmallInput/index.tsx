import { TextInputProps } from 'react-native';
import { styles } from './styles';
import { TextInput } from 'react-native-gesture-handler';

export function SmallInput({ ...rest }: TextInputProps) {
  return (
    <TextInput style={styles.container} keyboardType='numeric'/>
);
}
