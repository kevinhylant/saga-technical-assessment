import { StyleSheet } from 'react-native';

import { dropShadow, fonts, token } from '../../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: token.spacingRegular,
    paddingHorizontal: token.spacingRegular,
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'column',
  },
  contentLabel: {
    flexDirection: 'row',
  },
  creatorName: {
    ...fonts.regular,
    ...fonts.boldWeight,
  },
  action: {
    ...fonts.regular,
  },
  durationIntoStory: {
    ...fonts.regular,
    textDecorationLine: 'underline',
  },
  commentContainer: {
    ...dropShadow,
    backgroundColor: token.colorBrandLight,
    borderRadius: token.radiusLarge,
  },
  comment: {
    padding: token.spacingLarge,
  },
});
