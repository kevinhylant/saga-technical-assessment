import { GestureResponderEvent } from 'react-native';

export enum ActionType {
  comment = 'CT',
  reaction = 'RN',
}

export type Feedback = {
  storyActions: [StoryAction];
};

export type StoryAction = {
  actionInfo: {
    mark_ms: number;
    reaction_type: string;
    text: string;
  };
  actionType: ActionType;
  createdAt: string;
  creator: {
    id: string;
    firstName: string;
    lastName: string;
    profilePhoto: string;
    thumbnail: string;
  };
  id: string;
};

export type Story = {
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

export type Track = {
  id: string;
  url: string;
  title: string;
  artist: string;
  date: string;
  artwork: string;
  description: string;
};

export type PressHandler = (event: GestureResponderEvent) => void;