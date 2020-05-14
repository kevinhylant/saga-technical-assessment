import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Screen } from '../components/Screen';
import { StoryPlaybackCard } from './StoryPlaybackCard';
import { StoryFeedback } from './StoryFeedback';
import { styles } from './StoryDetail.styles';

export const StoryDetail: React.FunctionComponent<{}> = ({}) => {
  const [feedback, setFeedback] = useState({});
  const [story, setStory] = useState();

  useEffect(() => {
    setFeedback(require('../data/feedback-data.json').data);
    setStory(require('../data/story-data.json').data.action);
  }, []);

  console.log({ feedback, story });

  return (
    <Screen containerStyle={styles.container}>
      <View style={styles.navBar} />
      <View style={styles.storyPlayback}>
        <StoryPlaybackCard story={story} />
      </View>
      <StoryFeedback />
    </Screen>
  );
};
