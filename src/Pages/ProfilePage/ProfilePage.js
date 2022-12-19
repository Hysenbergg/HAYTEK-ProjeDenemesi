import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Config from 'react-native-config';

export default ProfilePage = () => {
  return (
    <SafeAreaView>
      <Text> Profile Page olacak. { Config.API_URL } </Text>
    </SafeAreaView>
  )
}