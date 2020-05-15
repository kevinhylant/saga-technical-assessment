import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './StoryFeedbackActionConfirmation.styles';

interface Props {
  message: string;
}

export const StoryFeedbackActionConfirmation: React.FunctionComponent<Props> = ({
  message,
}) => (
  <View style={styles.container}>
    <View style={styles.dialogueBox}>
      <Text style={styles.dialogueBoxText}>{message}</Text>
    </View>
  </View>
);
