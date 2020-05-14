import { StyleSheet, DevSettings } from 'react-native';
import { fonts, token } from '../DesignSystem';

export const styles = StyleSheet.create({
  card: {
    // width: '100%',
    backgroundColor: token.colorWhite,
    borderRadius: token.radiusLarge,
    // padding: token.spacingRegular,
    // width: '80%',
    elevation: 1,
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: 'center',
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 1 },
  },
});
