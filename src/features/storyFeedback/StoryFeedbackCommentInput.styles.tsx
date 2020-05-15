import { StyleSheet } from 'react-native';

import { token } from '../../DesignSystem';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  inputHeader: {},
  textStyle: {},
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
