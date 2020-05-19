import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { Link } from '../components/Link';
import { styles } from './Message.styles';

export const WORD_COUNT_TRUNCATE_TO = 11;
export const WORD_COUNT_DISPLAY_LIMIT = 30; // roughly 140 characters

interface Props {
  children: string;
  style?: object;
}

export const Message: React.FunctionComponent<Props> = ({
  children,
  style,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function truncateContent(): void {
    setIsExpanded(false);
  }

  function expandContent(): void {
    setIsExpanded(true);
  }

  let messageToDisplay = children;
  let isTruncated = false;
  if (typeof children === 'string' && !isExpanded) {
    const words = children.split(' ');
    // Only truncate messages that are above a certain size so that we
    // don't end up unnecessarily truncating a message by just a few words.
    if (words.length > WORD_COUNT_DISPLAY_LIMIT) {
      isTruncated = true;
      messageToDisplay = words.slice(0, WORD_COUNT_TRUNCATE_TO).join(' ');
    }
  }

  if (!messageToDisplay) {
    return null;
  }

  return (
    <Text style={style}>
      {isTruncated ? `${messageToDisplay}... ` : messageToDisplay}
      {isTruncated && (
        <Link style={[style, styles.link]} onPress={expandContent}>
          more
        </Link>
      )}
      {isExpanded && (
        <Link style={[style, styles.link]} onPress={truncateContent}>
          {` less`}
        </Link>
      )}
    </Text>
  );
};
