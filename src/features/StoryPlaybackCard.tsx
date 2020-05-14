import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';

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

export const StoryPlaybackCard: React.FunctionComponent<Props> = ({
  story,
}) => {
  useEffect(() => {
    const {
      id,
      createdAt,
      creator,
      actionInfo: { title, length_ms: lengthMs, media_url: url, description },
    } = story;
    const creatorFullName = `${creator.firstName} ${creator.lastName}`;

    const track = {
      id, // Must be a string, required
      url,
      // url: require('./avaritia.ogg'), // Load media from the app bundle
      // url: 'file:///storage/sdcard0/Music/avaritia.wav' // Load media from the file system
      title,
      artist: creatorFullName,
      date: createdAt, // RFC 3339
      artwork: creator.thumbnail, // Load artwork from the network
      // artwork: require('./avaritia.jpg'), // Load artwork from the app bundle
      // artwork: 'file:///storage/sdcard0/Downloads/artwork.png', // Load artwork from the file system
    };

    TrackPlayer.add([track]).then(function () {
      // TrackPlayer.play();
      // TrackPlayer.pause();
      // TrackPlayer.stop();
      // TrackPlayer.reset();
    });
  }, []);
  console.log({ story });
  if (!story) {
    return null;
  }


  setTimeout(() => {
    
  }, 1000)
  return (
    <View style={styles.container}>
      <StoryPlayer />
    </View>
  );
};
