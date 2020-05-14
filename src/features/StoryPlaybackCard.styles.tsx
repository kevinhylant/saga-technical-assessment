import { StyleSheet, DevSettings } from 'react-native';

import { token } from '../DesignSystem';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: token.colorWhite,
    borderRadius: token.radiusLarge,
    padding: token.spacingRegular,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
  },
});
