import { StyleSheet } from 'react-native';

import { token } from '../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: token.colorWhite,
  },
  // link color override is required otherwise the link will
  // inherit whatever style (color) passed into Message
  link: {
    color: token.colorBrand,
  },
});
