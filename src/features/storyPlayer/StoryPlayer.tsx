import React, { useEffect } from 'react';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import { Image, Text, View, ViewStyle } from 'react-native';

import { Message } from '../../components/Message';
import { icons } from '../../assets';
import { Track } from '../../Types';
import { StoryPlayerControlButton } from './StoryPlayerControlButton';
import { StoryPlayerProgressBar } from './StoryPlayerProgressBar';
import { styles } from './StoryPlayer.styles';

interface Props {
  containerStyle?: ViewStyle;
  track: Track;
}

export const StoryPlayer: React.FunctionComponent<Props> = ({
  containerStyle,
  track,
}) => {
  const playbackState = usePlaybackState();
  const progress = useTrackPlayerProgress();

  async function initializePlayerWithTrack(): Promise<void> {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(track);
  }

  async function togglePlayback(): Promise<void> {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    console.log({ currentTrack });
    // Just in case the track fails to load when the component mounts
    // let's reset the player and add the track again
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add(track);
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }

  async function seekBackward(): Promise<void> {
    const { position } = progress;
    await TrackPlayer.seekTo(position - 10);
  }

  async function seekForward(): Promise<void> {
    const { position } = progress;
    await TrackPlayer.seekTo(position + 10);
  }

  useEffect(() => {
    initializePlayerWithTrack();
  }, []);

  let togglePlayBackIconSource = icons.playArrow;
  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    togglePlayBackIconSource = icons.pause;
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <Text style={styles.artist}>{`${track.artist} • ${track.date}`}</Text>
          <Text style={styles.title}>{track.title}</Text>
        </View>
        <Image style={styles.cover} source={{ uri: track.artwork }} />
      </View>
      <StoryPlayerProgressBar />
      <View style={styles.controls}>
        <StoryPlayerControlButton
          iconSource={icons.timeSeekForward}
          onPress={seekBackward}
          style={styles.controlIconSeekBackward}
        />
        <StoryPlayerControlButton
          iconSource={togglePlayBackIconSource}
          onPress={togglePlayback}
        />
        <StoryPlayerControlButton
          iconSource={icons.timeSeekForward}
          onPress={seekForward}
        />
      </View>
      <Message style={styles.description}>{track.description}</Message>
    </View>
  );
};