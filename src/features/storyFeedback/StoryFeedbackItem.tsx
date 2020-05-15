import React from 'react';
import { Image, View } from 'react-native';

import { Message } from '../../components/Message';
import { StoryAction, ActionType } from '../../Types';
import { msToMinutesAndSeconds } from '../StoryHelpers';
import { emoji } from './StoryFeedbackBarItem';
import { styles } from './StoryFeedbackItem.styles';

interface Props {
  storyAction: StoryAction;
}

export const StoryFeedbackItem: React.FunctionComponent<Props> = ({
  storyAction: { actionInfo, actionType, creator },
}) => {
  const durationIntoStory = msToMinutesAndSeconds(actionInfo.mark_ms);
  let actionText = '';
  if (actionType === ActionType.reaction) {
    actionText = ` ${emoji[actionInfo.reaction_type]} ${
      actionInfo.reaction_type
    } `;
  } else if (actionType === ActionType.comment) {
    actionText = ' commented at ';
  }

  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={{ uri: creator.thumbnail }} />
      <View style={styles.contentContainer}>
        <View style={styles.contentSummary}>
          <Message style={styles.creatorName}>{creator.firstName}</Message>
          <Message style={styles.action}>{actionText}</Message>
          <Message style={styles.durationIntoStory}>
            {durationIntoStory}
          </Message>
        </View>
        {actionInfo.text && (
          <View style={styles.commentContainer}>
            <Message>{actionInfo.text}</Message>
          </View>
        )}
      </View>
    </View>
  );
};
