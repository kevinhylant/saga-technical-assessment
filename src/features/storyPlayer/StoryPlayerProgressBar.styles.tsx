import { StyleSheet } from 'react-native';

import { token } from '../../DesignSystem';

const progressDotSize = 10;
export const styles = StyleSheet.create({
  container: {
    height: 1,
    marginHorizontal: token.spacingSmall,
    marginTop: token.spacingLarge,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bar: {
    width: '100%',
    backgroundColor: token.colorGray30,
    height: 3,
  },
  dot: {
    position: 'absolute',
    backgroundColor: token.colorBrand,
    width: progressDotSize,
    height: progressDotSize,
    bottom: -(progressDotSize / 2),
    borderRadius: progressDotSize / 2,
  },
});
