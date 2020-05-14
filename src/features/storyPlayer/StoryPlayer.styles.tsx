import { StyleSheet } from 'react-native';

import { token, fonts } from '../../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: token.colorWhite,
  },
  cover: {
    width: 80,
    height: 80,
    borderRadius: token.radiusLarge,
    backgroundColor: token.colorBrandLight,
  },
  title: {
    ...fonts.regular,
    flexWrap: 'wrap',
  },
  artist: {
    ...fonts.tiny,
    marginTop: token.spacingSmall,
  },
  description: {
    ...fonts.small,
    color: token.colorGray70,
    width: '100%',
  },
  controls: {
    marginVertical: token.spacingHigh,
    flexDirection: 'row',
  },
  controlIconSeekBackward: {
    transform: [{ scaleX: -1 }],
  },
});
