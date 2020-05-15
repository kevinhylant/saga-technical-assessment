import React from 'react';
import { View } from 'react-native';
import { useTrackPlayerProgress } from 'react-native-track-player';

import { Message } from '../../components/Message';
import { styles } from './StoryPlayerProgressBar.styles';

export const StoryPlayerProgressBar: React.FunctionComponent<{}> = () => {
  const progress = useTrackPlayerProgress();
  const { position, duration } = progress;
  const percentComplete = `${(position / (duration || 1)) * 100}%`;

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <View style={{ flex: progress.position, backgroundColor: 'red' }} />
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
        <Message style={styles.timeLabel}>0:00</Message>
        <Message style={styles.timeLabel}>-3:25</Message>
      </View>
    </View>
  );
};
