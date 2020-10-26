import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },

  pageIntro: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',

    // borderColor: 'red',
    // borderWidth: 1,
  },

  titlesContainer: {
    padding: 32,
    // borderColor: 'red',
    // borderWidth: 1,
  },

  title: {
    fontFamily: 'Archivo-Regular',
    fontSize: 40,
    color: '#3D3D4D',
    width: '50%',
  },

  subTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#7A7A80',
    width: '50%',
    marginTop: 15,
  },

  formContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
  },

  signUpStepLabel: {
    fontFamily: 'Archivo-Regular',
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginBottom: 20,
  },

  swiperDot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },

  swiperActiveDot: {
    backgroundColor: '#DC1637',
    width: 6,
    height: 6,
    borderRadius: 3,
  },

  swiperWrapper: {
    height: '100%',
  },
});

export default styles;
