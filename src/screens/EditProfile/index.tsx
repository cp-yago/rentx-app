import React, { useCallback } from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { useSelector } from 'react-redux';
import { IAuthState, IUser } from '../../store/modules/auth/types';

import ChangePersonalData from './ChangePersonalData';
import ChangePassword from './ChangePassword';

import styles from './styles';

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    tabStyle={styles.tabBar}
    contentContainerStyle={styles.contentContainerStyle}
    indicatorStyle={styles.tabBarIndicator}
    renderLabel={({ route }) => (
      <Text style={styles.tabBarText}>{route.title}</Text>
    )}
  />
);

const initialLayout = { width: Dimensions.get('window').width };

const EditProfile: React.FC = () => {
  const { goBack } = useNavigation();

  const user = useSelector<IAuthState, IUser>((state) => state.auth.user);

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'first', title: 'Dados' },
    { key: 'second', title: 'Trocar senha' },
  ]);

  const renderScene = SceneMap({
    first: ChangePersonalData,
    second: ChangePassword,
  });

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
            <Icon name="chevron-left" size={20} color="#AEAEB3" />
          </TouchableOpacity>
          <Text style={styles.pageTitle}>Editar Perfil</Text>
        </View>

        <View style={styles.userDataContainer}>
          <Image
            style={styles.userAvatar}
            source={{
              uri:
                'https://avatars3.githubusercontent.com/u/22509891?s=460&u=1928b8f61bd9f9a3877091fe1c3c7c448a97a29f&v=4',
            }}
          />
          <TouchableOpacity style={styles.changeAvatarButton}>
            <Icon name="camera" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.userName}>{user.name}</Text>
        </View>
      </View>

      <View style={styles.personalInfoContainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
          style={styles.tabViewContainer}
        />
      </View>
    </View>
  );
};

export default EditProfile;
