import React from "react";
import { SafeAreaView, Text} from 'react-native';
import FormButton from '../../Components/Button';

const SelectedForm = ({navigation}) => {

  function handleApplicationForm(){
    navigation.navigate("ApplicationForm");
  }

  return(
    <SafeAreaView style={{flex: 1}}>
      <Text> Welcome to Selected Form</Text>
      <FormButton text="Başvuru Formu" onPress={handleApplicationForm} />
    </SafeAreaView>
  )
}

export default SelectedForm;