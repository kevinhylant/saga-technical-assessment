import React from 'react';
import { ScrollView, View } from 'react-native';

import { Feedback } from '../../Types';
import { StoryFeedbackItem } from './StoryFeedbackItem';
import { StoryFeedbackBar } from './StoryFeedbackBar';
import { styles } from './StoryFeedback.styles';

interface Props {
  addFeedback: Function;
  feedback: Feedback;
}

export const StoryFeedback: React.FunctionComponent<Props> = ({
  feedback,
  addFeedback,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {feedback.storyActions.map((storyAction) => (
          <StoryFeedbackItem key={storyAction.id} storyAction={storyAction} />
        ))}
      </ScrollView>
      <StoryFeedbackBar addFeedback={addFeedback} />
    </View>
  );
};
