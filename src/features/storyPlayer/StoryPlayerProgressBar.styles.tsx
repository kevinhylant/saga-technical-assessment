import { StyleSheet } from 'react-native';

import { fonts, token } from '../../DesignSystem';

const progressDotSize = 10;
export const styles = StyleSheet.create({
  container: {
    marginHorizontal: token.spacingSmall,
  },
  barContainer: {
    height: 1,
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
  timeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: token.spacingSmall,
    paddingLeft: token.spacingTiny,
  },
  timeLabel: {
    ...fonts.regular,
  },
});
