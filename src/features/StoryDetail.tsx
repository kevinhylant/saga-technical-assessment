import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Story } from '../Types';
import { Screen } from '../components/Screen';
import { StoryPlaybackCard } from './StoryPlaybackCard';
import { styles } from './StoryDetail.styles';

export const StoryDetail: React.FunctionComponent<{}> = ({}) => {
  const [story, setStory] = useState<Story>();

  useEffect(() => {
    setStory(require('../data/story-data.json').data.action);
  }, []);

  // Since data is fetched locally a loading indicator isn't really necessary
  if (!story) {
    return null;
  }

  return (
    <Screen containerStyle={styles.container}>
      <View style={styles.navBar} />
      <View style={styles.storyPlayback}>
        <StoryPlaybackCard story={story} />
      </View>
    </Screen>
  );
};
