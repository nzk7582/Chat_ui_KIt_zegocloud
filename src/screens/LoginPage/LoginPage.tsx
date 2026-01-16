import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ZIMKit } from '@zegocloud/zimkit-rn';
import { ZEGO_APP_ID, ZEGO_APP_SIGN } from '../../constants/AppKeys';

const LoginPage = () => {
  const navigation = useNavigation();
  useEffect(() => {
    ZIMKit.init(ZEGO_APP_ID, ZEGO_APP_SIGN);
    ZIMKit.connectUser(
      {
        userID: '1001', // Your ID as a user.
        userName: 'AppStackEng', // Your name as a user.
      },
      '',
    ).then(() => {
      // Implement your event handling logic after logging in successfully.
      // Navigate to the In-app Chat Kit page.
      navigation.navigate('HomePage');
    });
  }, []);

  return null;
};

export default LoginPage;

const styles = StyleSheet.create({});
