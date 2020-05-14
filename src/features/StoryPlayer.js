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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  cover: {
    width: 40,
    height: 40,
    backgroundColor: 'grey',
  },
  progress: {
    height: 1,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    marginTop: 10,
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  controlButtonContainer: {
    flex: 1,
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

function ProgressBar() {
  const progress = useTrackPlayerProgress();

  return (
    <View style={styles.progress}>
      <View style={{ flex: progress.position, backgroundColor: 'red' }} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: 'grey',
        }}
      />
    </View>
  );
}

function ControlButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export function StoryPlayer(props) {
  const playbackState = usePlaybackState();
  const progress = useTrackPlayerProgress();
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState('');

  useTrackPlayerEvents(['playback-track-changed'], async (event) => {
    console.log({ event });
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const { title, artist, artwork } = track || {};

      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

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
    await TrackPlayer.seekTo(position - props.seekBySeconds);
  }

  async function seekForward() {
    const { position } = progress;
    await TrackPlayer.seekTo(position + props.seekBySeconds);
  }

  useEffect(() => {
    initializePlayerWithTrack();
  }, []);

  let middleButtonText = 'Play';
  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = 'Pause';
  }

  return (
    <View style={[styles.container, props.containerStyle]}>
      <ProgressBar />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.title}>{trackTitle}</Text>
          <Text style={styles.artist}>{trackArtist}</Text>
        </View>
        <Image style={styles.cover} source={{ uri: trackArtwork }} />
      </View>
      <View style={styles.controls}>
        <ControlButton title={'<<'} onPress={seekBackward} />
        <ControlButton title={middleButtonText} onPress={togglePlayback} />
        <ControlButton title={'>>'} onPress={seekForward} />
      </View>
    </View>
  );
}

StoryPlayer.propTypes = {
  containerStyle: ViewPropTypes.style,
  seekBySeconds: PropTypes.func.isRequired,
  track: PropTypes.object.isRequired,
};

StoryPlayer.defaultProps = {
  style: {},
};
