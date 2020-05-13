import { StyleSheet, DevSettings } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

import { token } from '../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: token.colorWhite,
    paddingHorizontal: token.spacingGiant,
  },
  scrollView: {},
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
