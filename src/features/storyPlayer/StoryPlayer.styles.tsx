import { StyleSheet } from 'react-native';

import { token, fonts } from '../../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: token.colorWhite,
    borderRadius: token.radiusLarge,
    padding: token.spacingRegular,
    width: '100%',
  },
  summary: {
    flexDirection: 'row',
  },
  summaryContent: {
    flexDirection: 'column',
    flex: 1,
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
});
