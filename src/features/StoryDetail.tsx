import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Feedback, Story, StoryAction } from '../Types';
import { Screen } from '../components/Screen';
import { StoryPlaybackCard } from './StoryPlaybackCard';
import { StoryFeedback } from './storyFeedback/StoryFeedback';
import { styles } from './StoryDetail.styles';

export const StoryDetail: React.FunctionComponent<{}> = ({}) => {
  const [feedback, setFeedback] = useState<Feedback>();
  const [story, setStory] = useState<Story>();

  useEffect(() => {
    const feedbackData = require('../data/feedback-data.json').data;
    const sortedFeedback = {
      ...feedbackData,
      storyActions: feedbackData.storyActions.sort(
        (a: StoryAction, b: StoryAction) =>
          a.actionInfo.mark_ms - b.actionInfo.mark_ms,
      ),
    };
    setFeedback(sortedFeedback);
    setStory(require('../data/story-data.json').data.action);
  }, []);

  // Since data is fetched locally a loading indicator isn't really necessary
  if (!feedback || !story) {
    return null;
  }

  return (
    <Screen containerStyle={styles.container}>
      <View style={styles.navBar} />
      <View style={styles.storyPlayback}>
        <StoryPlaybackCard story={story} />
      </View>
      <StoryFeedback feedback={feedback} />
    </Screen>
  );
};
