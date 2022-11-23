import React from "react";
import { SafeAreaView, Text} from 'react-native';
import styles from './PastFormPage.style';

const HomePage = () => {
  return(
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.title} >Welcome to Geçmiş Formlar</Text>
    </SafeAreaView>
  )
}

export default HomePage;