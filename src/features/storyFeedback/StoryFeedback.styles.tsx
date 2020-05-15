import { StyleSheet } from 'react-native';

import { token } from '../../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: token.colorWhite,
  },
  scrollView: {
    paddingHorizontal: token.spacingHuge,
  },
  listItem: {
    paddingVertical: token.spacingRegular,
  },
});
