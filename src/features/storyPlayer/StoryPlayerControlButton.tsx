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
  disabled?: boolean;
  iconSource: ImageSourcePropType;
  onPress: PressHandler;
  style?: ImageStyle;
}

export const StoryPlayerControlButton: React.FunctionComponent<Props> = ({
  disabled,
  iconSource,
  onPress,
  style,
}) => (
  <TouchableOpacity
    disabled={disabled}
    style={styles.container}
    onPress={onPress}>
    <Image
      source={iconSource}
      style={[styles.icon, disabled && styles.iconDisabled, style]}
    />
  </TouchableOpacity>
);
