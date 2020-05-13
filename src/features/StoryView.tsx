import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { Screen } from '../components/Screen';

export const StoryView: React.FunctionComponent<{}> = ({}) => {
  const [feedback, setFeedback] = useState([]);
  const [story, setStory] = useState([]);

  useEffect(() => {
    setFeedback(require('../data/feedback-data.json').data);
    setStory(require('../data/story-data.json').data);
  }, []);

  console.log({ feedback, story });

  return (
    <Screen>
      <View>
        <Text>Hello saga!</Text>
      </View>
    </Screen>
  );
};
