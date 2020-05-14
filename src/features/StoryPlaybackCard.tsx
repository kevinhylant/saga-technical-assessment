import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { Story, Track } from '../Types';
import { StoryPlayer } from './storyPlayer/StoryPlayer';
import { styles } from './StoryPlaybackCard.styles';

interface Props {
  story?: Story;
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
  };
}

export const StoryPlaybackCard: React.FunctionComponent<Props> = ({
  story,
}) => {
  const [track, setTrack] = useState<Track>();

  useEffect(() => {
    if (story) {
      setTrack(getTrack(story));
    }
  }, [story]);

  if (!track) {
    return null;
  }

  return <StoryPlayer containerStyle={styles.card} track={track} />;
};
