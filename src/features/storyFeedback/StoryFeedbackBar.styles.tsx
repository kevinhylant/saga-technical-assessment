import { StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

import { token } from '../../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: token.colorWhite,
    borderTopColor: token.colorGray70,
    borderTopWidth: 1,
    ...(isIphoneX()
      ? {
          paddingHorizontal: token.spacingSmall,
          // generally speaking we wouldn't want to put content in the unsafe area,
          // but given we have a tab-bar-like component with simple buttons, it looks
          // best if we use part of that unsafe area to display padding around reaction
          // buttons so that we can provide large enough tap targets for each reaction
          paddingBottom: token.sizeUnsafeAreaHeightIPhoneX / 2,
        }
      : {
          paddingHorizontal: token.spacingSmall,
        }),
  },
});
