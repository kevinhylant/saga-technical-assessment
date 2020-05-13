import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { StoryView } from './features/StoryView';
import { token } from './DesignSystem';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: token.colorWhite,
  },
});

export const App: React.FunctionComponent<{}> = () => (
  <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.safeArea}>
      <StoryView />
    </SafeAreaView>
  </>
);
