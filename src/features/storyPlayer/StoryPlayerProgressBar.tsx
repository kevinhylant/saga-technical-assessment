import React, { useState, useRef, useEffect } from 'react';
import { View } from 'react-native';
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerProgress,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';

import { Message } from '../../components/Message';
import { token } from '../../DesignSystem';
import { icons } from '../../assets';
import { msToSeconds, msToMinutesAndSeconds } from '../StoryHelpers';
import { styles } from './StoryPlayerProgressBar.styles';

interface Props {
  lengthMs: number;
}

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export const StoryPlayerProgressBar: React.FunctionComponent<Props> = ({
  lengthMs, // we pass in the duration rather than grabbing it from useTrackPlayerProgress because while the player is loading before first play, the duration is 0
}) => {
  const { position } = useTrackPlayerProgress();
  const previousPosition = usePrevious(position) ?? 0;
  const playbackState = usePlaybackState();
  const [isSliding, setIsSliding] = useState(false);
  const [slidePositionMs, setSlidePositionMs] = useState(position);

  useEffect(() => {
    // when the position controlled by the react-native-track-player changes
    // AND the user is not actively adjusting the slider, we want to unset
    // the override and show the actual progress position
    console.log({ previousPosition, position });
    const positionChange = Math.abs(position - previousPosition);
    const isChangeResultOfSlide = positionChange > 3;
    // if (props.position)
    if (isChangeResultOfSlide) {
      setIsSliding(false); // By un-setting, we fall back to react-native-track-player's position
    }
  }, [position]);

  // playbackState === TrackPlayer.STATE_PLAYING
  const positionMs = position * 1000;

  // if it is sliding while playing the clip, show the slide position
  // if it is sliding while paused, show the slide position
  // when done sliding and paused, continue showing slide position until there is a position set
  const positionToDisplay = isSliding ? slidePositionMs : positionMs;
  const durationIntoStory = msToMinutesAndSeconds(positionToDisplay);
  const durationUntilEnd = msToMinutesAndSeconds(lengthMs - positionToDisplay);

  function onSlidingStart() {
    setIsSliding(true);
  }

  function onValueChange(msValue) {
    setSlidePositionMs(msValue);
  }

  function onSlidingComplete(msValue) {
    const seconds = msToSeconds(msValue);
    TrackPlayer.seekTo(seconds);
    // setIsSliding(false);
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
        thumbTintColor={token.colorBrand}
        minimumTrackTintColor={token.colorBrand}
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
