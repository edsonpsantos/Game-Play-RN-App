import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    textAlign: 'center',
    color: theme.colors.heading,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'cover'
  }
});
