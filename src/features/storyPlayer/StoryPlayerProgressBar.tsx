import React from 'react';
import { View } from 'react-native';
import { useTrackPlayerProgress } from 'react-native-track-player';

import { Message } from '../../components/Message';
import { msToMinutesAndSeconds } from '../StoryHelpers';
import { styles } from './StoryPlayerProgressBar.styles';

export const StoryPlayerProgressBar: React.FunctionComponent<{}> = () => {
  const progress = useTrackPlayerProgress();
  const { position, duration } = progress;
  const percentComplete = `${(position / (duration || 1)) * 100}%`;
  const durationIntoStory = msToMinutesAndSeconds(position * 1000);
  const durationUntilEnd = msToMinutesAndSeconds((duration - position) * 1000);

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <View style={styles.bar} />
        <View
          style={[
            {
              left: percentComplete,
            },
            styles.dot,
          ]}
        />
      </View>
      <View style={styles.timeLabels}>
        <Message style={styles.timeLabel}>{durationIntoStory}</Message>
        <Message style={styles.timeLabel}>{`-${durationUntilEnd}`}</Message>
      </View>
    </View>
  );
};
