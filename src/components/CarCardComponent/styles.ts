import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 128,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F4F5F6',
    margin: 10,

    // borderColor: 'blue',
    // borderWidth: 1,
  },

  carInfoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    paddingTop: 10,
    // borderColor: 'red',
    // borderWidth: 1,
  },

  carBrand: {
    fontFamily: 'Archivo-Regular',
    fontSize: 10,
    color: '#AEAEB3',
    paddingVertical: 3,
  },

  carName: {
    fontFamily: 'Archivo-Regular',
    fontSize: 15,
    color: '#47474D',
    paddingVertical: 3,
  },

  rentalPeriod: {
    fontFamily: 'Archivo-Regular',
    fontSize: 10,
    color: '#AEAEB3',
    paddingVertical: 3,
  },

  rentalTotal: {
    fontFamily: 'Archivo-Regular',
    fontSize: 15,
    color: '#DC1637',
    paddingVertical: 3,
  },

  carPhotoContainer: {
    justifyContent: 'center',
    padding: 10,
  },

  carImg: {
    width: 184,
    height: 84,
  },
});

export default styles;
