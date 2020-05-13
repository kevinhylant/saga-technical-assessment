import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { styles } from './StoryFeedback.styles';

export const StoryFeedback: React.FunctionComponent<{}> = ({}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>Story feedback</Text>
      </ScrollView>
      <View style={styles.feedbackBar}>
        <Text>Reactions bar</Text>
      </View>
    </View>
  );
};
