import { GestureResponderEvent } from 'react-native';

export enum ActionType {
  comment = 'CT',
  reaction = 'RN',
}

export enum ReactionType {
  commented = 'commented',
  cried = 'cried',
  laughed = 'laughed',
  loved = 'loved',
  surprised = 'surprised',
}

export interface StringMap {
  [key: string]: string;
}

export type Feedback = {
  storyActions: [StoryAction];
};

export type StoryAction = {
  actionInfo: {
    mark_ms: number;
    reaction_type: ReactionType;
    text?: string;
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
  channel: {
    id: string;
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
  lengthMs: number;
};

export type PressHandler = (event: GestureResponderEvent) => void;
