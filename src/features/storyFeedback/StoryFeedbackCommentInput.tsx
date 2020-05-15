import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import { animations } from '../../DesignSystem';
import { styles } from './StoryFeedbackCommentInput.styles';

interface Props {
  setVisible: Function;
  visible: boolean;
}

export const StoryFeedbackCommentInput: React.FunctionComponent<Props> = ({
  setVisible,
  visible,
}) => {
  const [comment, setComment] = useState('');

  function hideCommentInput(): void {
    setVisible(false);
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
        <View style={styles.bottomView}>
          <View style={styles.modalView}>
            <View style={styles.inputHeader}>
              <TouchableHighlight
                onPress={hideCommentInput}
                accessibilityRole="button"
                activeOpacity={animations.buttons.activeOpacity}
                underlayColor="transparent">
                <Text style={styles.textStyle}>Hide</Text>
              </TouchableHighlight>
            </View>
            <Text style={styles.modalText}>Hello World!</Text>
            <TextInput
              autoFocus
              placeholder="Thank you for sharing this!"
              value={comment}
              onChangeText={setComment}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
