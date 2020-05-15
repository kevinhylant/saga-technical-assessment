import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useTrackPlayerProgress } from 'react-native-track-player';
import moment from 'moment';

import {
  Feedback,
  Story,
  StoryAction,
  ReactionType,
  ActionType,
} from '../Types';
import { Screen } from '../components/Screen';
import { StoryPlaybackCard } from './StoryPlaybackCard';
import { StoryFeedback } from './storyFeedback/StoryFeedback';
import { styles } from './StoryDetail.styles';
import { StoryFeedbackActionConfirmation } from './storyFeedback/StoryFeedbackActionConfirmation';

// placeholder in lieu of an actual user account
const creator = {
  id: '5',
  firstName: 'Kevin',
  lastName: 'Hylant',
  profilePhoto:
    'https://media-exp1.licdn.com/dms/image/C4E03AQGTO-n28VVqjw/profile-displayphoto-shrink_100_100/0?e=1594857600&v=beta&t=zNGzpuYVKKe28OfQK_8u4JjQUNR--mWVJic2ZOMkypg',
  thumbnail:
    'https://media-exp1.licdn.com/dms/image/C4E03AQGTO-n28VVqjw/profile-displayphoto-shrink_100_100/0?e=1594857600&v=beta&t=zNGzpuYVKKe28OfQK_8u4JjQUNR--mWVJic2ZOMkypg',
};

export const StoryDetail: React.FunctionComponent<{}> = ({}) => {
  const [feedback, setFeedback] = useState<Feedback>();
  const [actionConfirmationMessage, setActionConfirmationMessage] = useState<
    string | null
  >();
  const [story, setStory] = useState<Story>();
  const progress = useTrackPlayerProgress();

  function sortByMarkMs(storyActions: [StoryAction]): [StoryAction] {
    return storyActions.sort(
      (a: StoryAction, b: StoryAction) =>
        a.actionInfo.mark_ms - b.actionInfo.mark_ms,
    );
  }

  useEffect(() => {
    const feedbackData = require('../data/feedback-data.json').data;
    const sortedFeedback = {
      ...feedbackData,
      storyActions: sortByMarkMs(feedbackData.storyActions),
    };
    setFeedback(sortedFeedback);
    setStory(require('../data/story-data.json').data.action);
  }, []);

  // Since data is fetched locally a loading indicator isn't really necessary
  if (!feedback || !story) {
    return null;
  }

  function addFeedback(reactionType: ReactionType, text?: string): void {
    if (!feedback) {
      return;
    }
    const nowString = `${moment().unix()}`;
    const markMs = Number((progress.position * 1000).toFixed());
    const newStoryAction: StoryAction = {
      id: nowString,
      channel: {
        id: '4242',
      },
      createdAt: nowString, // Prefer to store in timestamp like 2020-02-18T17:16:57.714928+00:00, but this works for now
      creator,
      actionType:
        reactionType === ReactionType.commented
          ? ActionType.comment
          : ActionType.reaction,
      actionInfo: {
        mark_ms: markMs, // eslint-disable-line
        reaction_type: reactionType, // eslint-disable-line
        text,
      },
    };

    setFeedback({
      storyActions: sortByMarkMs(feedback.storyActions.concat(newStoryAction)),
    });
    // show a success message temporarily
    setActionConfirmationMessage('Added');
    setTimeout(() => {
      setActionConfirmationMessage(null);
    }, 2000);
  }

  return (
    <Screen containerStyle={styles.container}>
      <View style={styles.navBar} />
      <View style={styles.storyPlayback}>
        <StoryPlaybackCard story={story} />
      </View>
      <StoryFeedback addFeedback={addFeedback} feedback={feedback} />
      {actionConfirmationMessage && (
        <StoryFeedbackActionConfirmation message={actionConfirmationMessage} />
      )}
    </Screen>
  );
};
