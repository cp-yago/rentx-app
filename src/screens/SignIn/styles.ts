import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },

  pageIntro: {
    height: '50%',
    justifyContent: 'center',
  },

  titlesContainer: {
    marginTop: 80,
    padding: 50,
  },

  title: {
    fontFamily: 'Archivo-Regular',
    fontSize: 40,
    color: '#3D3D4D',
    width: 220,
  },

  subTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#7A7A80',
    width: 250,
    marginTop: 15,
  },

  formContainer: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },

  forgotPasswordLink: {
    marginLeft: 90,
  },

  checkboxText: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#737380',
  },

  signUpContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 30,
  },

  signUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
