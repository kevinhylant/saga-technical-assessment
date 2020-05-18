import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import moment from 'moment';

import { Message } from '../components/Message';
import { Story, Track } from '../Types';
import { StoryPlayer } from './storyPlayer/StoryPlayer';
import { styles } from './StoryPlaybackCard.styles';

interface Props {
  story: Story;
}

function getTrack(story: Story): Track {
  const { id, createdAt, creator, actionInfo } = story;
  const creatorFullName = `${creator.firstName} ${creator.lastName}`;
  const date = moment(createdAt).format('MMM D, YYYY');

  return {
    id,
    url: actionInfo.media_url,
    title: actionInfo.title,
    artist: creatorFullName,
    date,
    artwork: creator.thumbnail,
    description: actionInfo.description,
    lengthMs: actionInfo.length_ms,
  };
}

export const StoryPlaybackCard: React.FunctionComponent<Props> = ({
  story,
}) => {
  const [track, setTrack] = useState<Track>();

  useEffect(() => {
    setTrack(getTrack(story));
  }, []);

  if (!track) {
    return null;
  }

  return (
    <View style={styles.card}>
      <StoryPlayer track={track} />
      <ScrollView horizontal={false} style={styles.scrollView}>
        <Message style={styles.description}>{track.description}</Message>
      </ScrollView>
    </View>
  );
};
