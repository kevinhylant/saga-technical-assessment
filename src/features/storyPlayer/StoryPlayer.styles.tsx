import { StyleSheet } from 'react-native';

import { token, fonts } from '../../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: token.colorWhite,
    borderRadius: token.radiusLarge,
    padding: token.spacingRegular,
  },
  cover: {
    width: 80,
    height: 80,
    borderRadius: token.radiusLarge,
    backgroundColor: token.colorBrandLight,
  },
  title: {
    ...fonts.medium,
    flexWrap: 'wrap',
  },
  artist: {
    ...fonts.tiny,
    marginTop: token.spacingSmall,
  },
  controls: {
    marginTop: token.spacingSmall,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  controlIconSeekBackward: {
    transform: [{ scaleX: -1 }],
  },
});
