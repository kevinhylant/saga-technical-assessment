import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import { ReactionType, StringMap } from '../../Types';
import { animations } from '../../DesignSystem';
import { styles } from './StoryFeedbackBarItem.styles';

export const emoji: StringMap = {
  commented: '💬',
  cried: '😢',
  laughed: '😂',
  loved: '❤',
  surprised: '😲',
};

interface Props {
  onPress: Function;
  reactionType: ReactionType;
}

export const StoryFeedbackBarItem: React.FunctionComponent<Props> = ({
  onPress,
  reactionType,
}) => {
  return (
    <TouchableHighlight
      style={styles.container}
      accessibilityRole="button"
      activeOpacity={animations.buttons.activeOpacity}
      onPress={onPress.bind(null, reactionType)}
      underlayColor="transparent">
      <Text style={styles.reaction}>{emoji[reactionType]}</Text>
    </TouchableHighlight>
  );
};
