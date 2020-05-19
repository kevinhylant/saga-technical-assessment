import { StyleSheet } from 'react-native';

import { token } from '../../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: token.spacingSmallPlus,
  },
  icon: {
    width: token.sizeIconWidth,
    height: token.sizeIconHeight,
    margin: token.spacingSmallPlus,
  },
  iconDisabled: {
    tintColor: token.colorGray50,
  },
});
