import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  iconPlus?: boolean;
};
export function ButtonAdd({ iconPlus, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialCommunityIcons name={!iconPlus ? 'close' : 'plus'} color={theme.colors.heading} size={24} />
    </RectButton>
  );
}
