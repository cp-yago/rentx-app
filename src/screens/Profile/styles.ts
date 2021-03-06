import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  avatarContainer: {
    width: '100%',
    height: '50%',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 15,
    height: '50%',
    backgroundColor: '#1B1B1F',
  },

  pageTitle: {
    fontFamily: 'Archivo-Regular',
    fontSize: 25,
    color: '#FFFFFF',
  },

  userDataContainer: {
    alignItems: 'center',
  },

  userAvatar: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginTop: -80,
  },

  userName: {
    fontFamily: 'Archivo-Regular',
    fontSize: 30,
    color: '#3D3D4D',
  },

  personalInfoContainer: {
    width: '100%',
    height: '50%',
  },

  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 15,
  },

  indicatorName: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#7A7A80',
  },

  metricName: {
    fontFamily: 'Archivo-Regular',
    fontSize: 15,
    color: '#47474D',
  },

  countDivisor: {
    borderWidth: 1,
    borderColor: '#E6E6F0',
    alignSelf: 'center',
    width: 350,
    marginVertical: 10,
  },

  carCardContainer: {
    flex: 1,
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
});

export default styles;
