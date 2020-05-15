import React, { useState } from 'react';
import { View } from 'react-native';

import { ReactionType } from '../../Types';
import { StoryFeedbackBarItem } from './StoryFeedbackBarItem';
import { StoryFeedbackCommentInput } from './StoryFeedbackCommentInput';
import { styles } from './StoryFeedbackBar.styles';

interface Props {
  addFeedback: Function;
}

export const StoryFeedbackBar: React.FunctionComponent<Props> = ({
  addFeedback,
}) => {
  const [commentInputVisible, setCommentInputVisible] = useState(false);

  function onPressReaction(reaction: ReactionType): void {
    addFeedback(reaction);
  }

  function onPressComment(): void {
    setCommentInputVisible(true);
    // Show a Modal from the bottom that contains a text area component
    // and auto-focuses on it
  }

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
      <StoryFeedbackCommentInput
        addFeedback={addFeedback}
        setVisible={setCommentInputVisible}
        visible={commentInputVisible}
      />
    </View>
  );
};
