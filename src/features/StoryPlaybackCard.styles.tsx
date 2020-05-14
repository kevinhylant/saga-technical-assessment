import { StyleSheet, DevSettings } from 'react-native';
import { fonts, token } from '../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    // width: '100%',
    backgroundColor: token.colorWhite,
    borderRadius: token.radiusLarge,
    // padding: token.spacingRegular,
  },
  card: {
    width: '80%',
    elevation: 1,
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: 'center',
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 1 },
  },
  cover: {
    width: 40,
    height: 40,
    backgroundColor: 'grey',
  },
  progress: {
    height: 1,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    marginTop: 10,
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  controlButtonContainer: {
    flex: 1,
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
