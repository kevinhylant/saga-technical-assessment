import { StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

import { token } from '../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: token.colorBrand,
    ...(isIphoneX()
      ? {
          paddingTop: token.sizeUnsafeAreaHeightIPhoneX,
        }
      : { paddingTop: token.sizeStatusBarHeight }),
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: token.spacingRegular,
    height: token.spacingGiant, // placeholder for a true navigation bar
  },
  storyPlayback: {
    paddingTop: token.spacingLarge,
    paddingHorizontal: token.spacingHuge,
    paddingBottom: token.spacingSmall,
  },
});
