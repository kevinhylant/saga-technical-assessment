import { StyleSheet } from 'react-native';

import { dropShadow, fonts, token } from '../../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: token.spacingRegular,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  thumbnail: {
    height: token.spacingMega,
    width: token.spacingMega,
    borderRadius: token.spacingMega / 2,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contentSummary: {
    flexDirection: 'row',
  },
  creatorName: {
    ...fonts.regular,
    ...fonts.boldWeight,
    paddingLeft: token.spacingSmallPlus,
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
    marginTop: token.spacingTiny,
    marginLeft: token.spacingSmallPlus,
    padding: token.spacingLarge,
  },
});
