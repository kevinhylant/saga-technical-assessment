import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';

import { PressHandler } from '../../Types';
import { styles } from './StoryPlayerControlButton.styles';

interface Props {
  iconSource: ImageSourcePropType;
  onPress: PressHandler;
  style?: ImageStyle;
}

export const StoryPlayerControlButton: React.FunctionComponent<Props> = ({
  iconSource,
  onPress,
  style,
}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image source={iconSource} style={[styles.icon, style]} />
  </TouchableOpacity>
);
