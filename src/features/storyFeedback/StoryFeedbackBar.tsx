import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import { ReactionType } from '../../Types';
import { StoryFeedbackBarItem } from './StoryFeedbackBarItem';
import { styles } from './StoryFeedbackBar.styles';

interface Props {
  onSubmit: Function;
}

export const StoryFeedbackBar: React.FunctionComponent<Props> = ({
  onSubmit,
}) => {
  function onPressReaction(reaction: ReactionType): void {
    onSubmit(reaction);
  }

  function onPressComment(reaction: ReactionType): void {
    onSubmit(reaction);
  }
  console.log({ onSubmit });

  return (
    <View style={styles.container}>
      <StoryFeedbackBarItem
        onPress={onPressReaction}
        reactionType={ReactionType.loved}
      />
      <StoryFeedbackBarItem
        onPress={onPressReaction}
        reactionType={ReactionType.laughed}
      />
      <StoryFeedbackBarItem
        onPress={onPressReaction}
        reactionType={ReactionType.surprised}
      />
      <StoryFeedbackBarItem
        onPress={onPressReaction}
        reactionType={ReactionType.cried}
      />
      <StoryFeedbackBarItem
        onPress={onPressComment}
        reactionType={ReactionType.commented}
      />
    </View>
  );
};
