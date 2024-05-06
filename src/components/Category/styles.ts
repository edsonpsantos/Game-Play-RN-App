import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width:104,
    height: 120,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 8,
    marginRight: 6
  },
  content: {
    width: 100,
    height: 116,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    justifyContent:'space-between',
    alignItems: 'center',
    paddingVertical: 7
  },
  checked: {
    width: '100%',
    height: 6,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    marginRight: 8,
    borderRadius: 2
  },
  check: {
    width: '100%',
    height: 10,
    backgroundColor: theme.colors.secondary100,
    alignSelf: 'flex-start',
    marginRight: 8,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 2,
  },
  title: {
    fontFamily: theme.fonts.title500,
    fontSize: 15,
    color: theme.colors.heading,
  }
});
