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
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 15,
    height: '50%',
    backgroundColor: '#1B1B1F',
  },

  goBackButton: {
    position: 'absolute',
    top: 30,
    left: 20,
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

  changeAvatarButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DC1637',
    position: 'absolute',
    top: 65,
    right: 120,
  },

  userName: {
    fontFamily: 'Archivo-Regular',
    fontSize: 30,
    color: '#3D3D4D',
    marginTop: 10,
  },

  personalInfoContainer: {
    width: '100%',
    height: '50%',
  },

  tabView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },

  tabViewContainer: {
    backgroundColor: '#F4F5F6',
  },

  contentContainerStyle: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 1,
  },

  tabBar: {
    backgroundColor: '#F4F5F6',
  },

  tabBarIndicator: {
    backgroundColor: '#DC1637',
  },

  tabBarText: {
    fontFamily: 'Archivo-Regular',
    fontSize: 20,
    color: '#3D3D4D',
  },
});

export default styles;
