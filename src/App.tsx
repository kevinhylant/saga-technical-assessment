import React from 'react';
import { StatusBar } from 'react-native';

import { StoryDetail } from './features/StoryDetail';

export const App: React.FunctionComponent<{}> = () => (
  <>
    <StatusBar barStyle="light-content" />
    <StoryDetail />
  </>
);
