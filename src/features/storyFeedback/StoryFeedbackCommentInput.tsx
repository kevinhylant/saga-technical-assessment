import React, { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTrackPlayerProgress } from 'react-native-track-player';

import { ReactionType } from '../../Types';
import { icons } from '../../assets';
import { animations, token } from '../../DesignSystem';
import { Link } from '../../components/Link';
import { Message } from '../../components/Message';
import { msToMinutesAndSeconds } from '../StoryHelpers';
import { styles } from './StoryFeedbackCommentInput.styles';

interface Props {
  addFeedback: Function;
  setVisible: Function;
  visible: boolean;
}

export const StoryFeedbackCommentInput: React.FunctionComponent<Props> = ({
  addFeedback,
  setVisible,
  visible,
}) => {
  const [comment, setComment] = useState('');
  const progress = useTrackPlayerProgress();
  const durationIntoStory = msToMinutesAndSeconds(progress.position * 1000);

  function hideCommentInput(): void {
    setVisible(false);
  }

  function postComment(): void {
    addFeedback(ReactionType.commented, comment);
    hideCommentInput();
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableOpacity
          onPress={hideCommentInput}
          style={styles.backdrop}
          accessibilityRole="button"
          activeOpacity={1}>
          <View style={styles.contentContainer}>
            <View style={styles.contentHeader}>
              <TouchableHighlight
                onPress={hideCommentInput}
                accessibilityRole="button"
                activeOpacity={animations.buttons.activeOpacity}
                underlayColor="transparent">
                <Image source={icons.arrowLineLeft} style={styles.closeIcon} />
              </TouchableHighlight>
              <Message style={styles.title}>Add a comment</Message>
              <Link onPress={postComment} style={styles.link}>
                Post
              </Link>
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.commentingPositionExplainer}>
                {`Add a comment at ${durationIntoStory}`}
              </Text>
              <TextInput
                autoFocus
                multiline
                placeholder="Thank you for sharing this!"
                placeholderTextColor={token.colorGray70}
                value={comment}
                onChangeText={setComment}
                style={styles.textInput}
              />
            </View>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
};
