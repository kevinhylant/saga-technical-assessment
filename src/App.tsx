import React from 'react';
import { StatusBar } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import { StoryDetail } from './features/StoryDetail';

TrackPlayer.setupPlayer().then(() => {
  console.log('Setup Complete');
});

export const App: React.FunctionComponent<{}> = () => (
  <>
    <StatusBar barStyle="light-content" />
    <StoryDetail />
  </>
);
