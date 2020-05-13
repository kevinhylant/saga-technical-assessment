import React from 'react';
import { Text, View } from 'react-native';

import { Screen } from '../components/Screen';

export const StoryView: React.FunctionComponent<{}> = ({}) => {
  return (
    <Screen>
      <View>
        <Text>Hello saga!</Text>
      </View>
    </Screen>
  );
};
