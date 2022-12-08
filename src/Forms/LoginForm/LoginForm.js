import * as React from 'react';
import { ScrollView, View, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './LoginForm.style';
import TextInput from '../../Components/TextInput';
import MyButton from '../../Components/Mybutton'
import Realm from 'realm';
let realm;
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degerlendirme_tarihi: '',
      dosya_numarasi: '',
      firma_kurulus: '',
      firma_adres: '',
      firma_telefon_no: '',
      firma_fax: '',
      firma_eposta: '',
      firma_ilgili_kisi: '',
    };
    realm = new Realm({ path: 'FormDatabase.realm' });
  }

  register_form = () => {
    var that = this;
    const { degerlendirme_tarihi } = this.state;
    const { dosya_numarasi } = this.state;
    const { firma_kurulus } = this.state;
    const { firma_adres } = this.state;
    const { firma_telefon_no } = this.state;
    const { firma_fax } = this.state;
    const { firma_eposta } = this.state;
    const { firma_ilgili_kisi } = this.state;

    if (degerlendirme_tarihi) {
      if (dosya_numarasi) {
        if (firma_kurulus) {
          if (firma_adres) {
            if (firma_telefon_no) {
              if (firma_fax) {
                if (firma_eposta) {
                  if (firma_ilgili_kisi) {
                    realm.write(() => {
                      var ID = 
                        realm.objects('form_details').sorted('form_id', true).length > 0
                          ? realm.objects('form_details').sorted('form_id', true)[0].form_id + 1
                          : 1;
                      realm.create('form_details', {
                        form_id: ID,
                        degerlendirme_tarihi: that.state.degerlendirme_tarihi,
                        dosya_numarasi: that.state.dosya_numarasi,
                        firma_kurulus: that.state.firma_kurulus,
                        firma_adres: that.state.firma_adres,
                        firma_telefon_no: that.state.firma_telefon_no,
                        firma_fax: that.state.firma_fax,
                        firma_eposta: that.state.firma_eposta,
                        firma_ilgili_kisi: that.state.firma_ilgili_kisi,
                      });
                      Alert.alert(
                        'Success',
                        'You are registered successfully',
                        [
                          {
                            text: 'Tamam',
                            onPress: () => that.props.navigation.navigate('SelectedForm'),
                          },
                        ],
                        { cancelable: false }
                      );
                    })
                  } else {
                    alert('Lütfen İlgili kişisi alanını doldurunuz.')
                  }
                } else {
                  alert('Lütfen firma e-posta alanını doldurunuz.')
                }
              } else {
                alert('Lütfen firma fax alanını doldurunuz.')
              }
            } else {
              alert('Lütfen Firma Telefon Numarası alanını doldurunuz.')
            }
          } else {
            alert('Lütfen Firma Adres bilgisi alanını doldurunuz.')
          }
        } else {
          alert('Lütfen Firma/Kurulus alanını doldurunuz.')
        }
      } else {
        alert('Lütfen Dosya Numarası alanını doldurunuz.')
      }
    } else {
      alert('Lütfen Değerlendirme Tarihi alanını doldurunuz.')
    }
  };

  render() {
    return(
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <TextInput
              placeholder="Değerlendirme Tarihi"
              onChangeText={degerlendirme_tarihi => this.setState({ degerlendirme_tarihi })}
            />
            <TextInput
              placeholder="Dosya Numarası"
              onChangeText={dosya_numarasi => this.setState({ dosya_numarasi })}
              maxLength={10}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Firma / Kurulus"
              onChangeText={firma_kurulus => this.setState({ firma_kurulus })}
            />
            <TextInput
              placeholder="Firma Adresi"
              onChangeText={firma_adres => this.setState({ firma_adres})}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{ textAlignVertical: 'top' }}
            />
            <TextInput
              placeholder="Firma Telefon Numarası"
              onChangeText={firma_telefon_no => this.setState({ firma_telefon_no })}
              maxLength={10}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Firma Fax"
              onChangeText={firma_fax => this.setState({ firma_fax })}
            />
            <TextInput
              placeholder="Firma e-posta"
              onChangeText={firma_eposta => this.setState({ firma_eposta })}
            />
            <TextInput
              placeholder="Firma İlgili Kişisi"
              onChangeText={firma_ilgili_kisi => this.setState({ firma_ilgili_kisi })}
            />
            <MyButton
              title="Kaydet"
              customClick={this.register_form.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}

/*
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
*/

/*
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
*/ 