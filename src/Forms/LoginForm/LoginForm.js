import React, {useState, useEffect} from 'react';
import {ScrollView, View, KeyboardAvoidingView, Alert, Text} from 'react-native';
import styles from './LoginForm.style';
import TextInput from '../../Components/TextInput';
import MyButton from '../../Components/Mybutton';
import Realm from 'realm';
let realm;

export default LoginForm = ({navigation}) => {

  const [degerlendirme_tarihi, setDegerlendirmeTarihi] = useState('');
  const [dosya_numarasi, setDosyaNumarasi] = useState('');
  const [firma_kurulus, setFirmaKurulus] = useState('');
  const [firma_adres, setFirmaAdres] = useState('');
  const [firma_telefon_no, setFirmaTelefonNo] = useState('');
  const [firma_fax, setFirmaFax] = useState('');
  const [firma_eposta, setFirmaEposta] = useState('');
  const [firma_ilgili_kisi, setFirmaIlgiliKisi] = useState('');
  const [bas_denetci_ismi, setBasDenetciIsmi] = useState('');
  const [yedek_denetci_1_ismi, setYedekDenetci1Ismi] = useState('');
  const [yedek_denetci_2_ismi, setYedekDenetci2Ismi] = useState('');

  useEffect(() => {
    realm = new Realm({ path: 'FormDatabase.realm' });
  }, []);

  const register_form = () => {
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
                        realm.objects('form_details').sorted('form_id', true)
                          .length > 0
                          ? realm
                              .objects('form_details')
                              .sorted('form_id', true)[0].form_id + 1
                          : 1;
                      realm.create('form_details', {
                        form_id: ID,
                        degerlendirme_tarihi,
                        dosya_numarasi,
                        firma_kurulus,
                        firma_adres,
                        firma_telefon_no,
                        firma_fax,
                        firma_eposta,
                        firma_ilgili_kisi,
                        bas_denetci_ismi,
                        yedek_denetci_1_ismi,
                        yedek_denetci_2_ismi
                      });
                      Alert.alert(
                        'Success',
                        'You are registered successfully',
                        [
                          {
                            text: 'Tamam',
                            onPress: () =>
                              navigation.navigate('SelectedForm'),
                          },
                        ],
                        {cancelable: false},
                      );
                    });
                  } else {
                    alert('L??tfen ??lgili ki??isi alan??n?? doldurunuz.');
                  }
                } else {
                  alert('L??tfen firma e-posta alan??n?? doldurunuz.');
                }
              } else {
                alert('L??tfen firma fax alan??n?? doldurunuz.');
              }
            } else {
              alert('L??tfen Firma Telefon Numaras?? alan??n?? doldurunuz.');
            }
          } else {
            alert('L??tfen Firma Adres bilgisi alan??n?? doldurunuz.');
          }
        } else {
          alert('L??tfen Firma/Kurulus alan??n?? doldurunuz.');
        }
      } else {
        alert('L??tfen Dosya Numaras?? alan??n?? doldurunuz.');
      }
    } else {
      alert('L??tfen De??erlendirme Tarihi alan??n?? doldurunuz.');
    };
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1, justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 32, fontWeight: "bold", color: "purple", textAlign: "center" }} > Soru ??izelgesi </Text>
          <TextInput
            placeholder="De??erlendirme Tarihi"
            onChangeText={setDegerlendirmeTarihi}
          />
          <TextInput
            placeholder="Dosya Numaras??"
            onChangeText={setDosyaNumarasi}
            maxLength={10}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Firma / Kurulus"
            onChangeText={setFirmaKurulus}
          />
          <TextInput
            placeholder="Firma Adresi"
            onChangeText={setFirmaAdres}
            maxLength={225}
            numberOfLines={5}
            multiline={true}
            style={{ textAlignVertical: 'top' }}
          />
          <TextInput
            placeholder="Firma Telefon Numaras??"
            onChangeText={setFirmaTelefonNo}
            maxLength={10}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Firma Fax"
            onChangeText={setFirmaFax}
          />
          <TextInput
            placeholder="Firma e-posta"
            onChangeText={setFirmaEposta}
          />
          <TextInput
            placeholder="Firma ??lgili Ki??isi"
            onChangeText={setFirmaIlgiliKisi}
          />
          <TextInput
            placeholder="Ba?? Denet??i ??smi"
            onChangeText={setBasDenetciIsmi}
          />
          <TextInput
            placeholder="1. Yedek Denet??i ??smi"
            onChangeText={setYedekDenetci1Ismi}
          />
          <TextInput
            placeholder="2. Yedek Denet??i ??smi"
            onChangeText={setYedekDenetci2Ismi}
          />
          <MyButton
            title="Kaydet"
            customClick={register_form}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
