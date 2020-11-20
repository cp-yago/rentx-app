import React, { useCallback } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import CarCardComponent from '../../components/CarCardComponent';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';
import { useNavigation } from '@react-navigation/native';
import { IAuthState, IUser } from '../../store/modules/auth/types';

import styles from './styles';

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const user = useSelector<IAuthState, IUser>((state) => state.auth.user);

  console.log('user', user);

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  const handleEditProfile = useCallback(() => {
    navigate('EditProfile');
  }, [navigate]);

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleEditProfile}>
            <Icon name="edit-3" size={20} color="#AEAEB3" />
          </TouchableOpacity>
          <Text style={styles.pageTitle}>Perfil</Text>
          <TouchableOpacity onPress={handleSignOut}>
            <Icon name="power" size={20} color="#AEAEB3" />
          </TouchableOpacity>
        </View>
        <View style={styles.userDataContainer}>
          <Image
            style={styles.userAvatar}
            source={{
              uri:
                'https://avatars3.githubusercontent.com/u/22509891?s=460&u=1928b8f61bd9f9a3877091fe1c3c7c448a97a29f&v=4',
            }}
          />
          <Text style={styles.userName}>{user.name}</Text>
        </View>
      </View>

      <View style={styles.personalInfoContainer}>
        <View style={styles.counterContainer}>
          <Text style={styles.indicatorName}>Agendamentos feitos</Text>
          <Text style={styles.metricName}>05</Text>
        </View>
        <View style={styles.countDivisor} />
        <View style={styles.counterContainer}>
          <Text style={styles.indicatorName}>Carro favorito</Text>
          <Text style={styles.metricName}>Utilizado 2 vezes</Text>
        </View>

        <View style={styles.carCardContainer}>
          <CarCardComponent />
        </View>
      </View>
    </View>
  );
};

export default Profile;
