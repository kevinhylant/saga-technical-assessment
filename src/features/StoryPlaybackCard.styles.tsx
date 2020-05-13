import { StyleSheet, DevSettings } from 'react-native';
import { fonts, token } from '../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    height: 200, // placeholder for content
    width: '100%',
    backgroundColor: token.colorWhite,
    borderRadius: token.radiusLarge,
    padding: token.spacingRegular,
  },
  authorDate: {
    ...fonts.small,
  },
  title: {
    ...fonts.regular,
  },
  image: {
    height: token.sizeThumbnailHeight,
    width: token.sizeThumbnailWidth,
  },
});
