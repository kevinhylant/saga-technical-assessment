import { StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

import { fonts, token } from '../../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: token.spacingHuge,
    alignSelf: 'center',
    bottom: token.spacingHuge * 2 + 1, // Add 1 pixel for height of the StoryFeedbackBar's top border
    ...(isIphoneX() && {
      // on iPhoneX's we have some extra bottom padding added to the StoryFeedbackBar
      marginBottom: token.sizeUnsafeAreaHeightIPhoneX / 2,
    }),
  },
  dialogueBox: {
    backgroundColor: token.colorGray80,
    padding: token.spacingHigh,
    borderRadius: token.radiusLarge,
  },
  dialogueBoxText: {
    ...fonts.medium,
    color: token.colorWhite,
  },
});
