import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';

import { StoryPlayer } from './StoryPlayer';
import { styles } from './StoryPlaybackCard.styles';

interface Props {
  story?: {
    id: string;
    createdAt: string;
    creator: {
      firstName: string;
      lastName: string;
      thumbnail: string;
    };
    actionInfo: {
      title: string;
      length_ms: number;
      media_url: string;
      description: string;
    };
  };
}

function getTrack(story) {
  const { id, createdAt, creator, actionInfo } = story;
  const creatorFullName = `${creator.firstName} ${creator.lastName}`;

  return {
    id,
    url: actionInfo.media_url,
    title: actionInfo.title,
    artist: creatorFullName,
    date: createdAt,
    artwork: creator.thumbnail,
    description: actionInfo.description,
  };
}

export const StoryPlaybackCard: React.FunctionComponent<Props> = ({
  story,
}) => {
  const [track, setTrack] = useState();

  useEffect(() => {
    if (story) {
      setTrack(getTrack(story));
    }
  }, [story]);

  if (!track) {
    return null;
  }

  return <StoryPlayer containerStyle={styles.card} track={track} />;
};
