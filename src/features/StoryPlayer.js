import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
import { icons } from '../assets';
import { token, fonts } from '../DesignSystem';

const progressDotSize = 10;
const styles = StyleSheet.create({
  container: {
    backgroundColor: token.colorWhite,
  },
  cover: {
    width: 80,
    height: 80,
    borderRadius: token.radiusLarge,
    backgroundColor: token.colorBrandLight,
  },
  progress: {
    height: 1,
    marginHorizontal: token.spacingSmall,
    marginTop: token.spacingLarge,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressDot: {
    position: 'absolute',
    backgroundColor: token.colorBrand,
    width: progressDotSize,
    height: progressDotSize,
    bottom: -(progressDotSize / 2),
    borderRadius: progressDotSize / 2,
  },
  title: {
    ...fonts.regular,
    flexWrap: 'wrap',
  },
  artist: {
    ...fonts.tiny,
    marginTop: token.spacingSmall,
  },
  description: {
    ...fonts.small,
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  controlContainer: {
    marginHorizontal: token.spacingSmallPlus,
  },
  controlIcon: {
    width: 24,
    height: 24,
    margin: token.spacingSmallPlus,
  },
  controlIconSeekBackward: {
    transform: [{ scaleX: -1 }],
  },
});

function ProgressBar() {
  const progress = useTrackPlayerProgress();
  const percentComplete = `${
    (progress.position / progress.duration) * 100 ?? 0
  }%`;
  console.log({ percentComplete });
  return (
    <View style={styles.progress}>
      <View style={{ flex: progress.position, backgroundColor: 'red' }} />
      <View
        style={{
          width: '100%',
          backgroundColor: token.colorGray30,
          height: 3,
        }}
      />
      <View
        style={[
          {
            left: percentComplete,
          },
          styles.progressDot,
        ]}
      />
    </View>
  );
}

function ControlButton({ iconSource, onPress, style }) {
  return (
    <TouchableOpacity style={styles.controlContainer} onPress={onPress}>
      <Image source={iconSource} style={[styles.controlIcon, style]} />
    </TouchableOpacity>
  );
}

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

export function StoryPlayer(props) {
  const playbackState = usePlaybackState();
  const progress = useTrackPlayerProgress();

  const { track } = props;

  async function initializePlayerWithTrack() {
    console.log('initializePlayerWithTrack');
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(props.track);
  }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    console.log({ currentTrack });
    // Just in case the track fails to load when the component mounts
    // let's reset the player and add the track again
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add(props.track);
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }

  async function seekBackward() {
    const { position } = progress;
    await TrackPlayer.seekTo(position - 10);
  }

  async function seekForward() {
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
  console.log({ togglePlayBackIconSource });
  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <Text style={styles.artist}>{track.artist}</Text>
          <Text style={styles.title}>{track.title}</Text>
        </View>
        <Image style={styles.cover} source={{ uri: track.artwork }} />
      </View>
      <ProgressBar />
      <View style={styles.controls}>
        <ControlButton
          iconSource={icons.timeSeekForward}
          onPress={seekBackward}
          style={styles.controlIconSeekBackward}
        />
        <ControlButton
          iconSource={togglePlayBackIconSource}
          onPress={togglePlayback}
        />
        <ControlButton
          iconSource={icons.timeSeekForward}
          onPress={seekForward}
        />
      </View>
      <Text style={styles.description}>{track.description}</Text>
    </View>
  );
}

StoryPlayer.propTypes = {
  containerStyle: ViewPropTypes.style,
  track: PropTypes.object.isRequired,
};

StoryPlayer.defaultProps = {
  style: {},
};
