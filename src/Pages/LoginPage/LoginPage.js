import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import styles from './LoginPage.style';
import {Formik} from 'formik';
import Input from '../../Components/TextInput';
import Button from '../../Components/Mybutton';

const Login = ({navigation}) => {

  function SystemLogin (values) {
    console.log(values);
    navigation.navigate('TabBarScreen');
  }
  return(
    <SafeAreaView style={styles.container} >
      <View style={styles.logo_container} >
        <Image style={styles.logo} source={require('../../Assets/form.png')} />
      </View>
      <Formik
        initialValues={{ username: '', password: ''}}
        onSubmit={SystemLogin}
      >
        {({ handleChange, handleSubmit, values}) => (
          <View style={styles.body_container} >
            <Input placeholder="Kullanici Adı" iconName="account" iconSize={24} iconColor="purple" onChangedText={handleChange('username')} value={values.username} multiline={false} />
            <Input placeholder="Şifre" iconName="key" iconSize={24} iconColor="purple" onChangedText={handleChange('password')} value={values.password} multiline={false} />
            <Button title="Giriş Yap" customClick={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export  default Login;