import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    textAlign:'center',
    color: theme.colors.heading,
    backgroundColor: theme.colors.secondary40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.secondary50,
    marginRight: 4,
  }
});
