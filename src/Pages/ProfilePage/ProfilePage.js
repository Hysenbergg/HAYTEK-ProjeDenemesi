import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

const ProfilePage = () => {
  const dispatch =useDispatch();

  function handleLogOut(){
    dispatch({type: 'SET_USER', payload: {user: null}});
  }


  return (
    <SafeAreaView>
      <Text> Profile Page olacak.</Text>
      <Button style={{  }} title="LogOut" onPress={handleLogOut} />
    </SafeAreaView>
  )
}

export default ProfilePage;