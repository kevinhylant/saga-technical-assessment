import { StyleSheet } from 'react-native';

import { dropShadow, fonts, token } from '../DesignSystem';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: token.colorWhite,
    borderRadius: token.radiusLarge,
    alignItems: 'center',
    ...dropShadow,
  },
  scrollView: {
    maxHeight: 200,
    width: '100%',
    paddingHorizontal: token.spacingRegular,
  },
  description: {
    ...fonts.small,
    color: token.colorGray70,
    paddingBottom: token.spacingRegular,
  },
});
