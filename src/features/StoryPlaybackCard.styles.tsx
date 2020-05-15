import { StyleSheet } from 'react-native';

import { dropShadow, token } from '../DesignSystem';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: token.colorWhite,
    borderRadius: token.radiusLarge,
    padding: token.spacingRegular,
    alignItems: 'center',
    ...dropShadow,
  },
});
