import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Feedback } from '../../Types';
import { StoryFeedbackItem } from './StoryFeedbackItem';
import { styles } from './StoryFeedback.styles';

interface Props {
  feedback: Feedback;
}

export const StoryFeedback: React.FunctionComponent<Props> = ({ feedback }) => {
  console.log({ feedback });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {feedback.storyActions.map((storyAction) => (
          <StoryFeedbackItem key={storyAction.id} storyAction={storyAction} />
        ))}
      </ScrollView>
      <View style={styles.feedbackBar}>
        <Text>Reactions bar</Text>
      </View>
    </View>
  );
};
