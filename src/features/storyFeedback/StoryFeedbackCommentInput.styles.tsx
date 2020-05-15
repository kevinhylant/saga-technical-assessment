import { StyleSheet } from 'react-native';

import { fonts, token } from '../../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  contentContainer: {
    width: '100%',
    backgroundColor: 'white',
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: token.spacingLarge,
    paddingHorizontal: token.spacingSmall,
    paddingBottom: token.spacingTiny,
    backgroundColor: token.colorGray10,
    borderBottomColor: token.colorGray50,
    borderBottomWidth: 1,
  },
  closeIcon: {
    height: token.sizeIconHeight,
    width: token.sizeIconHeight,
    margin: token.spacingSmall,
    transform: [{ rotate: '-90deg' }],
  },
  title: {
    ...fonts.medium,
    ...fonts.boldWeight,
  },
  link: {
    ...fonts.medium,
    color: token.colorBrand,
    padding: token.spacingSmall,
  },
  textInputContainer: {
    paddingTop: token.spacingTiny,
    paddingHorizontal: token.spacingRegular,
  },
  commentingPositionExplainer: {
    ...fonts.small,
  },
  textInput: {
    ...fonts.regular,
    borderColor: token.colorGray50,
    borderWidth: 1,
    borderRadius: token.radiusSmall,
    marginTop: token.spacingLarge,
    paddingTop: token.spacingTiny,
    paddingHorizontal: token.spacingSmall,
    paddingBottom: token.spacingGiant,
  },
});
