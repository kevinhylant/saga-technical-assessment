import React, { useEffect } from 'react';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import { Image, View, ViewStyle } from 'react-native';

import { Message } from '../../components/Message';
import { Track } from '../../Types';

import { StoryPlayerControls } from './StoryPlayerControls';
import { styles } from './StoryPlayer.styles';

interface Props {
  containerStyle?: ViewStyle;
  track: Track;
}

export const StoryPlayer: React.FunctionComponent<Props> = ({
  containerStyle,
  track,
}) => {
  async function initializePlayerWithTrack(): Promise<void> {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(track);
  }

  useEffect(() => {
    initializePlayerWithTrack();
  }, []);

  console.log({ track });

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.summary}>
        <View style={styles.summaryContent}>
          <Message
            style={styles.artist}>{`${track.artist} • ${track.date}`}</Message>
          <Message style={styles.title}>{track.title}</Message>
        </View>
        <Image style={styles.cover} source={{ uri: track.artwork }} />
      </View>
      <StoryPlayerControls track={track} />
    </View>
  );
};
