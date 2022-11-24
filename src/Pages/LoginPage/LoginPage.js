import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import styles from './LoginPage.style';
import {Formik} from 'formik';
import Input from '../../Components/TextInput';
import Button from '../../Components/Button';

const Login = ({navigation}) => {

  function SystemLogin (values) {
    console.log(values);
    navigation.navigate('Home');
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
            <Input label="Kullanici Adı" variant="outlined" iconName="account" iconSize={24} iconColor="purple" onChangedText={handleChange('username')} value={values.username} multiline={false} />
            <Input label="Şifre" variant="outlined" iconName="key" iconSize={24} iconColor="purple" onChangedText={handleChange('password')} value={values.password} multiline={false} />
            <Button text="Giriş Yap" variant="contained" onPress={handleSubmit} color="purple" />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export  default Login;