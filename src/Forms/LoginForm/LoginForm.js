import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import styles from './LoginForm.style';
import Input from '../../Components/TextInput';
import Button from '../../Components/Button';

const LoginForm = () => {
  return(
    <SafeAreaView style={styles.container} >
      <Formik
        style={styles.formik} initialValues={{ d_tarihi: '', dosyanumarası: '', musteri: '', eposta: '', firmafax: '', firmatelefon: '', ilgilikisi: '', adres: ''}}
        onSubmit={SystemLogin}
      >
        {({handleChange, handleSubmit, values}) => (
          <ScrollView >
            <View style={styles.title_container}>
              <Text style={styles.title}> SÜT SIĞIRCILIĞI İŞLETMELERİ DEĞERLENDİRME SORU LİSTESİ </Text>
            </View>
            <Input label="Değerlendirme Tarihi" variant="standard" onChangedText={handleChange('d_tarihi')} value={values.d_tarihi} multiline={false} />
            <Input label="Dosya Numarası" variant="standard" onChangedText={handleChange('dosyanumarası')} value={values.dosyanumarası} multiline={false} />
            <Input label="Müşteri Kuruluş" variant="standard" onChangedText={handleChange('musteri')} value={values.musteri} multiline={false} />
            <Input label="Adres" variant="standard" onChangedText={handleChange('adres')} value={values.adres} multiline={true} />   
            <Input label="Telefon" variant="standard" onChangedText={handleChange('firmatelefon')} value={values.firmatelefon} multiline={false} />
            <Input label="Fax" variant="standard" onChangedText={handleChange('firmafax')} value={values.firmafax} multiline={false} />
            <Input label="E-posta" variant="standard" onChangedText={handleChange('eposta')} value={values.eposta} multiline={false} />
            <Input label="İlgili Kişi" variant="standard" onChangedText={handleChange('ilgilikisi')} value={values.ilgilikisi} multiline={false} />
            <Button text="Devam Et" variant="contained" onPress={handleSubmit} color="purple" />
          </ScrollView>
        )}
      </Formik>
    </SafeAreaView>
  )

  function SystemLogin(values) {
    console.log(values);
  }
}
export default LoginForm;

/*import Realm from 'realm';

let realm;

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degerlendirme_tarihi: '',
      dosya_numarasi: '',
      firma_kurulus: '',
      adres: '',
      telefon_no: '',
      fax: '',
      eposta: '',
      ilgili_kisi: '',
    };
    realm = new Realm({ path: 'FormDatabase.realm' });
  }

  render() {
    return(
      <SafeAreaView style={styles.container} >
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView behavior='padding' style={{flex: 1, justifyContent: 'space-between'}} >
              <View style={styles.title_container}>
                <Text style={styles.title}> SÜT SIĞIRCILIĞI İŞLETMELERİ DEĞERLENDİRME SORU LİSTESİ </Text>
              </View>
              <Input label="Değerlendirme Tarihi" variant="standard" onChangedText={handleChange('d_tarihi')} value={values.d_tarihi} multiline={false} />
              <Input label="Dosya Numarası" variant="standard" onChangedText={handleChange('dosyanumarası')} value={values.dosyanumarası} multiline={false} />
              <Input label="Müşteri Kuruluş" variant="standard" onChangedText={handleChange('musteri')} value={values.musteri} multiline={false} />
              <Input label="Adres" variant="standard" onChangedText={handleChange('adres')} value={values.adres} multiline={true} />   
              <Input label="Telefon" variant="standard" onChangedText={handleChange('firmatelefon')} value={values.firmatelefon} multiline={false} />
              <Input label="Fax" variant="standard" onChangedText={handleChange('firmafax')} value={values.firmafax} multiline={false} />
              <Input label="E-posta" variant="standard" onChangedText={handleChange('eposta')} value={values.eposta} multiline={false} />
              <Input label="İlgili Kişi" variant="standard" onChangedText={handleChange('ilgilikisi')} value={values.ilgilikisi} multiline={false} />
              <Button text="Devam Et" variant="contained" onPress={handleSubmit} color="purple" />
            </KeyboardAvoidingView>
          </ScrollView>
      </SafeAreaView>
    )
  }
}*/

/*
 
*/ 