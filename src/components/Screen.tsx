import React from 'react';
import { View, StyleSheet } from 'react-native';

import { token } from '../DesignSystem';

interface Props {
  children: React.ReactNode;
  containerStyle?: object; // TODO more specific
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: token.colorWhite,
  },
});

export const Screen: React.FunctionComponent<Props> = ({
  children,
  containerStyle,
}) => {
  return <View style={[styles.root, containerStyle]}>{children}</View>;
};
