import React, { PureComponent } from 'react';
import { StyleSheet, Text, GestureResponderEvent } from 'react-native';
import { token } from '../DesignSystem';

// StyleSheet is tiny, so just keeping it in this file
const styles = StyleSheet.create({
  link: {
    color: token.colorBrand,
  },
});

interface Props {
  children: string;
  onPress: (event: GestureResponderEvent) => void;
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
