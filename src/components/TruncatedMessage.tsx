import React, { PureComponent } from 'react';
import { Text, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import sectionStyles from 'components/detailScreen/__styles__/DetailScreenSection.styles';
import { FormattedMessage } from 'react-intl';

export const WORD_COUNT_TRUNCATE_TO = 25;
export const WORD_COUNT_DISPLAY_LIMIT = 40;

class DetailScreenContentWithOptionalLabel extends PureComponent {
  state = {
    contentIsExpanded: false,
  }

  componentDidMount() {
    if (this.props.showFullContent) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ contentIsExpanded: true });
    }
  }

  handleExpandContent = () => {
    const {
      handleDidExpand,
    } = this.props;

    this.setState({ contentIsExpanded: true });

    if (handleDidExpand) {
      handleDidExpand();
    }
  }

  render() {
    const {
      containerStyle,
      content,
      labelId,
      labelDefaultMessage,
    } = this.props;
    const wordCountTruncateTo = this.props.wordCountTruncateTo || WORD_COUNT_TRUNCATE_TO;
    const wordCountDisplayLimit = this.props.wordCountDisplayLimit || WORD_COUNT_DISPLAY_LIMIT;

    let contentToDisplay = content;
    let isTruncated = false;

    if (typeof content === 'string' && !this.state.contentIsExpanded) {
      const words = content.split(' ');
      if (words.length > wordCountDisplayLimit) {
        isTruncated = true;
        contentToDisplay = words.slice(0, wordCountTruncateTo).join(' ');
      }
    }

    return (!!content &&
      <View style={containerStyle}>
        <Text
          accessibilityLabel="Label"
          style={sectionStyles.label}
        >
          {(contentToDisplay && labelId && labelDefaultMessage) &&
            <FormattedMessage
              id={labelId}
              defaultMessage={labelDefaultMessage}
            />
          }
          {contentToDisplay &&
            <Text
              accessibilityLabel="Content"
              style={sectionStyles.content}
            >
              {isTruncated ? `${contentToDisplay}... ` : contentToDisplay}
              {isTruncated &&
                <Link onPress={this.handleExpandContent}>
                  <FormattedMessage
                    id="detailScreen.readMore"
                    defaultMessage="read more"
                  />
                </Link>
              }
            </Text>
          }
        </Text>
      </View>
    );
  }
}

DetailScreenContentWithOptionalLabel.propTypes = {
  containerStyle: ViewPropTypes.style,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  labelId: PropTypes.string,
  labelDefaultMessage: PropTypes.string,
  handleDidExpand: PropTypes.func,
  wordCountDisplayLimit: PropTypes.number,
  wordCountTruncateTo: PropTypes.number,
  showFullContent: PropTypes.bool,
};

export default DetailScreenContentWithOptionalLabel;
