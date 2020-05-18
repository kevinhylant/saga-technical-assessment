import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import TrackPlayer, { useTrackPlayerProgress } from 'react-native-track-player';
import Slider from '@react-native-community/slider';

import { Message } from '../../components/Message';
import { token } from '../../DesignSystem';
import { msToSeconds, msToMinutesAndSeconds } from '../StoryHelpers';
import { styles } from './StoryPlayerProgressBar.styles';

interface Props {
  lengthMs: number;
}

export const StoryPlayerProgressBar: React.FunctionComponent<Props> = ({
  lengthMs, // we pass in the duration rather than grabbing it from useTrackPlayerProgress because while the player is loading before first play, the duration is 0
}) => {
  const { position } = useTrackPlayerProgress();
  const [isSliding, setIsSliding] = useState(false);
  const [shouldUseSliderPosition, setShouldUseSliderPosition] = useState(false);
  const [slidePositionMs, setSlidePositionMs] = useState(position);

  useEffect(() => {
    // IF we are currently showing the slider’s position
    // AND the user is not actively sliding
    // AND the position managed by react-native-track-player changes (e.g. the track is playing)
    // THEN we want to show the track's real position rather instead of the slider’s
    //
    // - In the case that the audio track is paused, the 'position' does not get updated immediately
    // by react-native-track-player’s state hook immediately (not until the user taps play) and so
    // we want to continue showing the slider’s value until the 'position' state updates to reflect
    // the value set by TrackPlayer.seekTo(). This effect block only gets called when the position changes
    // which handles this scenario.
    if (shouldUseSliderPosition && !isSliding) {
      // setIsSliding(false); // By un-setting, we fall back to react-native-track-player's position
      setShouldUseSliderPosition(false);
    }
  }, [position]);

  // playbackState === TrackPlayer.STATE_PLAYING
  const positionMs = position * 1000;

  // if it is sliding while playing the clip, show the slide position
  // if it is sliding while paused, show the slide position
  // when done sliding and paused, continue showing slide position until there is a position set
  const positionToDisplay = shouldUseSliderPosition
    ? slidePositionMs
    : positionMs;
  const durationIntoStory = msToMinutesAndSeconds(positionToDisplay);
  const durationUntilEnd = msToMinutesAndSeconds(lengthMs - positionToDisplay);

  function onSlidingStart(): void {
    setIsSliding(true);
    setShouldUseSliderPosition(true);
  }

  function onValueChange(msValue: number): void {
    setSlidePositionMs(msValue);
  }

  function onSlidingComplete(msValue: number): void {
    const seconds = msToSeconds(msValue);
    TrackPlayer.seekTo(seconds);
    setIsSliding(false);
  }

  return (
    <View style={styles.container}>
      <Slider
        // Once this issue is addressed: github.com/react-native-community/react-native-slider/issues/169
        // we will be able to dynamically size the slider's size. An alternative slider library is 'azir-slider'
        style={styles.bar}
        minimumValue={0}
        maximumValue={lengthMs}
        step={1000}
        value={positionToDisplay}
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
    </View>
  );
};
