import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29292E',
  },

  background: {
    flex: 1,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },

  footer: {
    height: '50%',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Archivo-SemiBold',
    fontSize: 30,
    color: '#E1E1E6',
    marginTop: 10,
  },

  subTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#A8A8B3',
    width: 150,
    textAlign: 'center',
    marginTop: 20,
  },

  okButton: {
    backgroundColor: '#29292E',
    width: 80,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A8A8B3',
    marginTop: 25,
  },

  okButtonText: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#FFFFFF',
  },
});

export default styles;
