import React from 'react';
import { View } from 'react-native';

import { styles } from './Screen.styles';

interface Props {
  children: React.ReactNode;
  containerStyle?: object; // TODO more specific
}

export const Screen: React.FunctionComponent<Props> = ({
  children,
  containerStyle,
}) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};
