import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { PressHandler } from '../Types';
import { fonts, token } from '../DesignSystem';

// StyleSheet is tiny, so just keeping it in this file
const styles = StyleSheet.create({
  link: {
    ...fonts.regular,
    ...fonts.mediumWeight,
    color: token.colorBrand,
  },
});

interface Props {
  children: string;
  onPress: PressHandler;
  style?: object;
}

export const Link: React.FunctionComponent<Props> = ({
  children,
  onPress,
  style,
}) => (
  <Text onPress={onPress} style={[styles.link, style]}>
    {children}
  </Text>
);
