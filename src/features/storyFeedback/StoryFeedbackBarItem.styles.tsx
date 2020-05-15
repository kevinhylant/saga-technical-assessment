import { StyleSheet } from 'react-native';

import { fonts, token } from '../../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  reaction: {
    ...fonts.displaySmall,
    paddingVertical: token.spacingRegular,
    paddingHorizontal: token.spacingHigh,
  },
});
