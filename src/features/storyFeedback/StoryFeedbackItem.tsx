import React from 'react';
import { Text, View } from 'react-native';

import { StoryAction, ActionType } from '../../Types';
import { styles } from './StoryFeedbackItem.styles';

const reactionEmojis = {
  cried: '😢',
  laughed: '😂',
  loved: '❤',
  surprised: '😲',
};

// converts 298999 >> 4:59
function msToMinutesAndSeconds(ms: number): string {
  const mins = Math.floor(ms / 60000);
  const secs = Number(((ms % 60000) / 1000).toFixed(0));
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

interface Props {
  storyAction: StoryAction;
}

export const StoryFeedbackItem: React.FunctionComponent<Props> = ({
  storyAction: { actionInfo, actionType, creator },
}) => {
  const durationIntoStory = msToMinutesAndSeconds(actionInfo.mark_ms);
  let actionText;
  if (actionType === ActionType.reaction) {
    actionText = ` ${reactionEmojis[actionInfo.reaction_type]} ${
      actionInfo.reaction_type
    } `;
  } else if (actionType === ActionType.comment) {
    actionText = ' commented at ';
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.contentLabel}>
          <Text style={styles.creatorName}>{creator.firstName}</Text>
          <Text style={styles.action}>{actionText}</Text>
          <Text style={styles.durationIntoStory}>{durationIntoStory}</Text>
        </View>
        {actionType === ActionType.comment && (
          <View style={styles.commentContainer}>
            <Text style={styles.comment}>{actionInfo.text}</Text>
          </View>
        )}
      </View>
    </View>
  );
};
