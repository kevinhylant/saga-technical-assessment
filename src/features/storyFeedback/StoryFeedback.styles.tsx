import { StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

import { token } from '../../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: token.colorWhite,
  },
  scrollView: {
    paddingHorizontal: token.spacingHuge,
  },
  feedbackBar: {
    ...(isIphoneX()
      ? {
          paddingTop: token.spacingRegular,
          paddingHorizontal: token.spacingRegular,
          paddingBottom: token.sizeUnsafeAreaHeightIPhoneX,
        }
      : {
          padding: token.spacingRegular,
        }),
  },
  listItem: {
    paddingVertical: token.spacingRegular,
  },
});
