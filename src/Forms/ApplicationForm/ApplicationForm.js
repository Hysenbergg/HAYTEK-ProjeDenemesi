import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Formik } from 'formik';
import styles from './ApplicationForm.style';
import Input from '../../Components/TextInput';
import Button from '../../Components/Button';

const ApplicationForm = () => {

  //const [sebep, setSebep] = React.useState('Başvuru Sebebini Seçiniz');   dropdown menu kısmı iccin yapılan state.


  function SystemLogin(values) {
    console.log(values);
  }
 
  return(
    <SafeAreaView style={styles.container} >
      <Formik
        style={styles.formik} initialValues={{ firmaadi: '', firmatanimi: '', firmasahibiadi: '', firmayetkilisiadi: '', firmafax: '', firmatelefon: '', firmabasvurukapsami: '', adres: ''}}
        onSubmit={SystemLogin}
      >
        {({handleChange, handleSubmit, values}) => (
          <ScrollView >
            <View style={styles.title_container}>
              <Text style={styles.title}> 1 - Firma/Kurum Bilgileri </Text>
            </View>
            <Input label="Firma Adı" variant="standard" onChangedText={handleChange('firmaadi')} value={values.firmaadi} multiline={false} />
            <Input label="Firma Tanımı" variant="standard" onChangedText={handleChange('firmatanimi')} value={values.firmatanimi} multiline={false} />
            <Input label="Firma Sahibinin Adı" variant="standard" onChangedText={handleChange('firmasahibiadi')} value={values.firmasahibiadi} multiline={false} />
            <Input label="Firma Yetkilisinin Adı" variant="standard" onChangedText={handleChange('firmayetkilisiadi')} value={values.firmayetkilisiadi} multiline={false} />
            <Input label="Fax" variant="standard" onChangedText={handleChange('firmafax')} value={values.firmafax} multiline={false} />
            <Input label="Telefon" variant="standard" onChangedText={handleChange('firmatelefon')} value={values.firmatelefon} multiline={false} />
            <Input label="Başvuru Kapsamı" variant="standard" onChangedText={handleChange('firmabasvurukapsami')} value={values.firmabasvurukapsami} multiline={false} />
            <Input label="Adres" variant="standard" onChangedText={handleChange('adres')} value={values.adres} multiline={true} />  
            <Button text="Devam Et" variant="contained" onPress={handleSubmit} color="purple" />
          </ScrollView>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export  default ApplicationForm;


/*
  <View style={styles.dorpdown_container} >
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button text={sebep} onPress={openMenu} color="lightgrey" />}
              >
                <Menu.Item onPress={() => {setSebep('Yeni Başvuru')}} title="Yeni Başvuru" />
                <Divider />
                <Menu.Item onPress={() => {setSebep('Başvuru Yineleme')}} title="Başvuru Yineleme" />
                <Divider />
                <Menu.Item onPress={() => {setSebep('Başvuru Düzeltme')}} title="Başvuru Düzeltme" /> 
              </Menu>
            </View>
*/