import { StyleSheet } from 'react-native';

import { fonts, token } from '../../DesignSystem';

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
    height: token.spacingHuge, // The draggable area of the slider
    marginTop: token.spacingSmallPlus,
  },
  timeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: token.spacingTiny,
  },
  timeLabel: {
    ...fonts.regular,
  },
  controlButtons: {
    marginTop: token.spacingSmall,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  controlIconSeekBackward: {
    transform: [{ scaleX: -1 }],
  },
});
