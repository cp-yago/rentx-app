import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: '100%',
    fontFamily: 'Inter-Regular',
  },

  inputContainer: {
    width: '85%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#F2F2FA',
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },

  inputIconContainer: {
    borderRightColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  togglePassword: {
    position: 'absolute',
    top: 20,
    right: 20,
  },

  lastInput: { marginTop: 10, marginBottom: 10 },
});

export default styles;
