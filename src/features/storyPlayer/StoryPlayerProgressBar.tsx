import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import TrackPlayer, { useTrackPlayerProgress } from 'react-native-track-player';
import Slider from '@react-native-community/slider';

import { Message } from '../../components/Message';
import { token } from '../../DesignSystem';
import { icons } from '../../assets';
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
  const [slidePositionMs, setSlidePositionMs] = useState(position);

  useEffect(() => {
    // when the position controlled by the react-native-track-player changes
    // AND the user is not actively adjusting the slider, we want to unset
    // the override and show the actual progress position
    setIsSliding(false); // By un-setting, we fall back to react-native-track-player's position
  }, [position]);

  const positionMs = position * 1000;
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
  }

  return (
    <View style={styles.container}>
      <Slider
        // Once this issue is addressed: github.com/react-native-community/react-native-slider/issues/169
        // we will be able to dynamically size the slider's size. An alternative slider library is 'azir-slider'
        style={styles.bar}
        minimumValue={0}
        maximumValue={lengthMs}
        step={1}
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
