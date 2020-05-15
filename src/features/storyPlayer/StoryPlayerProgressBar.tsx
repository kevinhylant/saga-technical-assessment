import React from 'react';
import { Text, View } from 'react-native';
import { useTrackPlayerProgress } from 'react-native-track-player';

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
        <Text style={styles.timeLabel}>0:00</Text>
        <Text style={styles.timeLabel}>-3:25</Text>
      </View>
    </View>
  );
};
