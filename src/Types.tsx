import { GestureResponderEvent } from 'react-native';

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
