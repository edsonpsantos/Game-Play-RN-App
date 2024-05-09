import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 16
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    marginBottom: 4
  },
  type: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
  }
});
