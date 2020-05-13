import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './StoryPlaybackCard.styles';

export const StoryPlaybackCard: React.FunctionComponent<{}> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Story playback</Text>
    </View>
  );
};
