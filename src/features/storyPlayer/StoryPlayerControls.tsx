import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerProgress,
  seekTo,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';

import { Track } from '../../Types';
import { Message } from '../../components/Message';
import { token } from '../../DesignSystem';
import { icons } from '../../assets';
import { msToSeconds, msToMinutesAndSeconds } from '../StoryHelpers';
import { StoryPlayerControlButton } from './StoryPlayerControlButton';
import { styles } from './StoryPlayerControls.styles';

const TEN_SECONDS = 10000;

interface Props {
  track: Track;
}

/*
  Manages both the progress bar and the player controls, encapsulating audio player management
*/
export const StoryPlayerControls: React.FunctionComponent<Props> = ({
  track, // we pass in the duration rather than grabbing it from useTrackPlayerProgress because while the player is loading before first play, the duration is 0
}) => {
  const progress = useTrackPlayerProgress();
  const playbackState = usePlaybackState();
  const [isSliding, setIsSliding] = useState(false);
  const [sliderPositionMs, setSliderPositionMs] = useState(progress.position);
  const trackPlayerPositionMs = progress.position * 1000;

  const durationIntoStory = msToMinutesAndSeconds(sliderPositionMs);
  const durationUntilEnd = msToMinutesAndSeconds(
    track.lengthMs - sliderPositionMs,
  );

  useEffect(() => {
    // Whenever we are not manually seeking we defer to react-native-track-player’s
    // for setting the position of the slider
    if (!isSliding) {
      setSliderPositionMs(trackPlayerPositionMs);
    }
  }, [trackPlayerPositionMs]);

  function onSlidingStart(): void {
    setIsSliding(true);
  }

  function onValueChange(msValue: number): void {
    setSliderPositionMs(msValue);
  }

  async function onSlidingComplete(msValue: number): Promise<void> {
    const seconds = msToSeconds(msValue);
    await TrackPlayer.seekTo(seconds);
    setIsSliding(false);
  }

  async function togglePlayback(): Promise<void> {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    // Just in case the track fails to load when the component mounts
    // let's reset the player and add the track again
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add(track);
      await TrackPlayer.play();
    } else {
      if (
        playbackState === TrackPlayer.STATE_PAUSED ||
        playbackState === TrackPlayer.STATE_READY
      ) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }

  async function seekTo(positionMs: number): Promise<void> {
    let newPositionMs = positionMs >= 0 ? positionMs : 0; // cannot be negative
    newPositionMs =
      newPositionMs >= track.lengthMs ? track.lengthMs : newPositionMs; // cannot be greater than the length of the track
    setSliderPositionMs(newPositionMs);
    await TrackPlayer.seekTo(msToSeconds(newPositionMs));
  }

  async function seekBackward(): Promise<void> {
    await seekTo(sliderPositionMs - TEN_SECONDS);
  }

  async function seekForward(): Promise<void> {
    await seekTo(sliderPositionMs + TEN_SECONDS);
  }

  let togglePlayBackIconSource = icons.playArrow;
  if (playbackState === TrackPlayer.STATE_PLAYING) {
    togglePlayBackIconSource = icons.pause;
  }

  return (
    <View style={styles.container}>
      <Slider
        // Once this issue is addressed: github.com/react-native-community/react-native-slider/issues/169
        // we will be able to dynamically size the slider's size. An alternative slider library is 'azir-slider'
        style={styles.bar}
        minimumValue={0}
        maximumValue={track.lengthMs}
        step={1000}
        value={sliderPositionMs}
        thumbTintColor={isSliding ? token.colorGray70 : token.colorBrand}
        minimumTrackTintColor={isSliding ? token.colorGray70 : token.colorBrand}
        maximumTrackTintColor={token.colorGray30}
        onSlidingStart={onSlidingStart}
        onValueChange={onValueChange}
        onSlidingComplete={onSlidingComplete}
      />
      <View style={styles.timeLabels}>
        <Message style={styles.timeLabel}>{durationIntoStory}</Message>
        <Message style={styles.timeLabel}>{`-${durationUntilEnd}`}</Message>
      </View>
      <View style={styles.controlButtons}>
        <StoryPlayerControlButton
          disabled={sliderPositionMs === 0}
          iconSource={icons.timeSeekForward}
          onPress={seekBackward}
          style={styles.controlIconSeekBackward}
        />
        <StoryPlayerControlButton
          disabled={sliderPositionMs === track.lengthMs}
          iconSource={togglePlayBackIconSource}
          onPress={togglePlayback}
        />
        <StoryPlayerControlButton
          disabled={sliderPositionMs === track.lengthMs}
          iconSource={icons.timeSeekForward}
          onPress={seekForward}
        />
      </View>
    </View>
  );
};
