import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './StoryActionConfirmation.styles';

interface Props {
  message: string;
}

export const StoryActionConfirmation: React.FunctionComponent<Props> = ({
  message,
}) => (
  <View style={styles.container}>
    <View style={styles.dialogueBox}>
      <Text style={styles.dialogueBoxText}>{message}</Text>
    </View>
  </View>
);
