import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.heading,
    textAlignVertical: 'top',
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    paddingHorizontal: 16,
    paddingTop: 16,
  }
});
